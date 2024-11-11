export const createTableHotel = `
CREATE TABLE IF NOT EXISTS Hotel (
id int auto_increment PRIMARY KEY,
name VARCHAR(100) unique,
standard INT NOT NULL,
deluxe INT NOT NULL,
location VARCHAR(50) NOT NULL,
pricePerNightStandard INT NOT NULL,
pricePerNightDeluxe INT NOT NULL,
rating INT NOT NULL,
ratingCount INT NOT NULL DEFAULT 0
)
`;