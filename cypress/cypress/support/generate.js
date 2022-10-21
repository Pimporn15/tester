import { build, fake, oneOf } from "test-data-bot";

const bulidUser = build("User").fields({
  username: fake((f) => f.internet.userName()),
  password: fake((f) => f.internet.password()),
  firstname: fake((f) => f.name.firstName()),
  lastname: fake((f) => f.name.lastName()),
});

const bulidCreate = build("Create").fields({
  title: fake((f) => f.lorem.sentence()),
  content: fake((f) => f.lorem.sentence()),
  selectstatus: oneOf(1, 2, 3),
});

const buildUpdate = build("Update555").fields({
  title: fake((f) => f.lorem.sentence()),
  content: fake((f) => f.lorem.sentence()),
  selectstatus: oneOf(1, 2, 3),
});

export { bulidCreate, bulidUser, buildUpdate };
