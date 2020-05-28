// get site id :
for (site_id in tC.containersLaunched) {
  console.log(`Site id is ${site_id}.`);
}

// Object.keys(containers_ids).forEach((item, i) => {
//   containers_ids_to_show.push(item)
// });

// console.log("Containers ids are : " + Object.values(containers_ids_to_show).toLocaleString())

for (containers_id in tC.containersLaunched) {
  containers_ids = tC.containersLaunched[containers_id]
  //console.log(containers_ids.);
}
Object.keys(containers_ids).forEach((item, i) => {
  console.log("container id number : " + item)
  Object.values(containers_ids).forEach((item, i) => {
    console.log("container version number : " + item.v)
    Object.values(containers_ids).forEach((item, i) => {
      //  console.log("container version number : "+item.v)
      for (var i = 0; i < item.t.length; i++) {
        console.log(item.t[i].label)
      }
    });
  });
});

//

// Object.values(containers_ids).forEach((item, i) => {
//     console.log(item)
// });


// for (containers_id in tC.containersLaunched) {
//   containers_ids = tC.containersLaunched[containers_id]
//   //console.log(containers_ids.);
//   Object.keys(containers_ids).forEach((item, i) => {
//     console.log("Container id number : " + item)
//     Object.values(containers_ids).forEach((item, i) => {
//       console.log("Container version number : " + item.v)
//       console.group("Tag(s) triggered : ")
//       for (var i = 0; i < item.t.length; i++) {
//         console.log(item.t[i].label)
//       }
//       console.groupEnd()
//     });
//   });
// }

javascript: for (site_id in tC.containersLaunched) console.log(`Site id is ${site_id}.`);
for (containers_id in tC.containersLaunched) containers_ids = tC.containersLaunched[containers_id], Object.keys(containers_ids).forEach((n, e) => {
  console.log("container id number : " + n), Object.values(containers_ids).forEach((n, e) => {
    console.log("container version number : " + n.v);
    for (e = 0; e < n.t.length; e++) console.log(n.t[e].label)
  })
});
