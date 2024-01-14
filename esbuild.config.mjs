import fs from 'fs';
import esbuild from 'esbuild';

esbuild
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/index.cjs',
    minify: true, // <--- defaults to false.
    treeShaking: true,
    format: 'cjs',
    // target: ['esnext'], // <--- The default target is 'esnext' which means that by default, esbuild will assume all of the latest JavaScript and CSS features are supported
  })
  .then(onSuccess);

async function onSuccess() {
  copyTheReadmeFile();

  copyTheNpmrcFile();

  copyThePackageJsonFile();

  console.log('DONE !!!');
}

function copyTheReadmeFile() {
  const readStreamReadmeMd = fs.createReadStream('./README.md');
  const writeStreamReadmeMd = fs.createWriteStream('./dist/README.md');
  readStreamReadmeMd.pipe(writeStreamReadmeMd);
}

function copyTheNpmrcFile() {
  const readStreamNpmrc = fs.createReadStream('./.npmrc');
  const writeStreamNpmrc = fs.createWriteStream('./dist/.npmrc');
  readStreamNpmrc.pipe(writeStreamNpmrc);
}

function copyThePackageJsonFile() {
  const packageJson = JSON.parse(fs.readFileSync('./package.json').toString());

  // - Remove all scripts
  delete packageJson.scripts;

  // - Change from private to public
  delete packageJson.private;
  packageJson.publishConfig.access = 'public';

  fs.writeFileSync('./dist/package.json', JSON.stringify(packageJson));
}
