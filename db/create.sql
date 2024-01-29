CREATE TABLE IF NOT EXISTS dogs (
      id INT NOT NULL,
      dog_name varchar(50) NOT NULL,
      PRIMARY KEY (id)
    );

CREATE TABLE IF NOT EXISTS comments (
      id SERIAL,
      comment varchar(500) NOT NULL,
      title varchar(50) NOT NULL,
      dog_id INT NOT NULL,
      author varchar(50) NOT NULL,
      comment_date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
      PRIMARY KEY (id),
      FOREIGN KEY (dog_id) REFERENCES dogs(id)
    );