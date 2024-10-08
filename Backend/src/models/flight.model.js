export const createTableFlight = `
CREATE TABLE IF NOT EXISTS Flight (
id INT AUTO_INCREMENT PRIMARY KEY,
airlineName VARCHAR(100) NOT NULL,
departure TIMESTAMP NOT NULL,
destination VARCHAR(100) NOT NULL,
origin VARCHAR(100) NOT NULL,
price INT NOT NULL,
status VARCHAR(50) NOT NULL DEFAULT 'Scheduled',
numSeats INT NOT NULL,
FOREIGN KEY (airlineName) REFERENCES Airline(name)
)
`;