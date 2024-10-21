# Room Information Management

## Description

This project is a simple JavaScript-based application that allows users to interactively view and manage room details. It provides options for viewing room names, detailed information about rooms, total seating capacity, and seating information by floor.

### Key Features:
1. View room names (converted to uppercase).
2. Get detailed information about each room, including the floor and seating capacity.
3. Calculate the total seating capacity across all rooms.
4. View seating capacity categorized by floor.
5. Exit the program when done.

### Technologies Used:
- **JavaScript** (ES6)
- **HTML** (for user prompt interactions)

## How It Works:

- **Room Class**: The class `Room` defines each room's name, floor, and seating capacity.
- **Array of Rooms**: A list of rooms is stored in an array with predefined room data.
- **User Interaction**: The program uses `prompt` and `alert` for user interaction. Based on the user's input, different functionalities are triggered.

## Functions:

1. **alertRooms**: Displays the list of room names in uppercase, each numbered.
2. **alertRoomsInfo**: Displays detailed information about each room, including its name, floor, and seating capacity.
3. **allSeatsInfo**: Calculates and displays the total seating capacity across all rooms.
4. **alfa**: Categorizes and displays seating capacity based on the floor (2nd or 3rd floor).

### Example Code Snippet

```javascript
function alertRooms() {
  let alertInfo = "";
  for (let i = 0; i < rooms.length; i++) {
    alertInfo += `${i + 1}. ` + rooms[i].getRooms() + "\n";
  }
  return alertInfo;
}

function allSeatsInfo() {
  let sumSeats = 0;
  for (let i = 0; i < rooms.length; i++) {
    sumSeats += rooms[i].seats;
  }
  return `TOTAL SEATS: ${sumSeats}`;
}
