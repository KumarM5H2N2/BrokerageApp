import { Clientfile } from "./association.js"; 

async function test() {
  // Très très libre ! On s'amuse à query n'importe quoi et tester !
  const clientfiles = await Clientfile.findAll({
    include: {
      association: "savingsdistribution"
    }
  });


  console.log(clientfiles);
}

  test();