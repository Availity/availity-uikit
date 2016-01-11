

/* eslint no-console:0 */

function format(date) {
  return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, '$1');
}

function run(promise, options) {

  const start = new Date();
  console.log(`[${format(start)}] Starting '${promise.name}'...`);

  return promise(options).then(function() {

    const end = new Date();
    const time = end.getTime() - start.getTime();
    console.log(`[${format(end)}] Finished '${promise.name}' after ${time} ms`);

  });


}

export default run;
