import jsonfile from "jsonfile";
import moment from "moment";
import simpleGit from "simple-git";
import random from "random";

const path = "./data.json";

const makeCommits = (n) => {
  if (n === 0) return simpleGit().push();

  const today = moment().startOf("day");
  const startDate = moment().subtract(1, "y").add(1, "d");

  const x = random.int(0, 54);
  const y = random.int(0, 6);

  let date = startDate.clone().add(x, "w").add(y, "d");

  // prevent future commits (use yesterday if date goes beyond today)
  if (date.isAfter(today)) {
    date = today.clone().subtract(1, "d");
  }

  const formattedDate = date.format();
  const data = { date: formattedDate };

  console.log(formattedDate);

  jsonfile.writeFile(path, data, () => {
    simpleGit()
      .add([path])
      .commit(formattedDate, { "--date": formattedDate }, makeCommits.bind(this, --n));
  });
};

makeCommits(100);
