class Room {
  constructor(name, floor, seats) {
    this.name = name;
    this.floor = floor;
    this.seats = seats;
  }

  getDetails() {
    return `${this.name}, ${this.floor}-qavatda, ${this.seats}ta joy bor`;
  }
  getRooms() {
    return `${this.name}`.toUpperCase();
  }
}

let rooms = [
  new Room("Autodesk", 2, 17),
  new Room("Yandex", 2, 14),
  new Room("SAP", 2, 23),
  new Room("Osmondagi bolalar", 3, 31),
  new Room("Tesla", 3, 24),
  new Room("Amazon", 3, 33),
];

//Honalar nomlari  number 1
function alertRooms() {
  let alertInfo = "";
  for (let i = 0; i < rooms.length; i++) {
    alertInfo += `${i + 1}. ` + rooms[i].getRooms() + "\n";
    console.log(`${i + 1}`);
  }
  return alertInfo;
}

// honalar haqida ma'lumot number 2
function alertRoomsInfo() {
  let alertData = "";
  for (let i = 0; i < rooms.length; i++) {
    alertData += `${i + 1}. ` + rooms[i].getDetails() + "\n";
  }
  return alertData;
}

// barcha joylar haqida ma'lumot  number 3
function allSeatsInfo() {
  let sumSeats = 0;
  for (let i = 0; i < rooms.length; i++) {
    sumSeats += rooms[i].seats;
  }
  let alertSumSeats = `JAMI SIG'IM : ${sumSeats} ta`;
  return alertSumSeats;
}

// etjlardagi joylar soni haqida ma'lumot number 4
function alfa() {
  let a = 0;

  let b = 0;

  rooms.filter((el) => {
    if (el.floor === 2) {
      a += el.seats;
    }
    if (el.floor === 3) {
      b += el.seats;
    }
  });

  return `2-QAVAT SIG'IM ${a}TA` + "\n" + `3-QAVAT SIG'IM ${b}TA`;
}

// result
let userPrompt;
do {
  userPrompt =
    prompt(
      `1. Xonalar nomini ko'rish. \n2. Xonalar haqida batafsil.\n3. Umumiy sig'im.\n4. Umumiy sig'im qavatlar kesimida.\n5. Chiqish`
    ) * 1;

  if (userPrompt == 1) {
    alert(alertRooms());
  } else if (userPrompt == 2) {
    alert(alertRoomsInfo());
  } else if (userPrompt == 3) {
    alert(allSeatsInfo());
  } else if (userPrompt == 4) {
    alert(alfa());
  } else if (userPrompt == 5) {
    alert("E'tiboringiz uchun rahmat");
  }
} while (userPrompt != 5); // number 5
