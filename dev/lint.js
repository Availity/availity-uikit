import eslint from 'eslint';
import globby from 'globby';
import Logger from './logger';

export default function lint() {

  const engine = new eslint.CLIEngine({
    useEslintrc: true
  });

  return new Promise((resolve, reject) => {

    globby(['**/**.js', '!node_modules/**', '!bower_components/**', '!dist/**']).then( paths => {
    // globby(['*.js']).then( paths => {

      var report = engine.executeOnFiles(paths.slice(2));
      var formatter = engine.getFormatter();

      if (report.errorCount || report.warningCount) {
        Logger.failed(`eslint`);
        Logger.simple(`${formatter(report.results)}`);
        reject();
      }else {
        Logger.ok(`eslint`);
        resolve();
      }


    });

  });


}
