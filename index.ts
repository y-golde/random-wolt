import { runRandomiser } from './tasks/runRandomiser';

const main = async () => {
    await runRandomiser();
};

(async () => {
    await main();
})();
