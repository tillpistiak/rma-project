# DogGallery

## Hinweise

- Optimiert für Desktop
  - Chrome
  - Firefox
  - Safari
- noch **nicht** optimiert für Mobile/ Tablet

## Installation



### 1. Bereitstellen der Website mit Docker

```bash
docker-compose up
```

Aufrufbar über: [localhost:8000](localhost:8000)  

## Projektstruktur

### 1. Übersicht

Das Projekt besteht aus 3 Komponenten, der Datenbank, einem Backend-Server und dem Frontend. Diese werden im docker-compose.yml File zusammengefasst. Zusätzlich wird Adminer zur Datenbankadministration zur Verfügung gestellt. Folgende Ports werden verwendet:
- Datenbank: 8001
- Adminer: 8002
- Backend: 8003
- Frontend: 8000

### 2. Datenbank

Als Datenbank kommt eine PostgresDB zum Einsatz. Dafür wird das offizielle Docker Hub Image verwendet und im [Dockerfile](./db/Dockerfile) wie folgt erweitert und konfiguriert. 

**Grundkonfiguration** (Passwort, User, DB-Name)

```Dockerfile
ENV POSTGRES_PASSWORD example
ENV POSTGRES_USER postgres
ENV POSTGRES_DB dogs
```
**Initialisierung der DB** 

Zum Anlegen und Befüllen der Tabellen bietet das Postgres Image den Ordner `/docker-entrypoint-initdb.d/`. IN diesen können bspw. SQL Files kopiert werden, die beim ersten Build des Image ausgeführt werden. Zu diesem Zweck werden `create.sql` (DDL) und `insert.sql` (DML) dem Ordner hinzugefügt.

```Dockerfile
ADD create.sql /docker-entrypoint-initdb.d/
ADD insert.sql /docker-entrypoint-initdb.d/
```

### 3. Server

Als Server kommt ein Node.js Server mit Express.js zum Einsatz, dessen Aufgabe das Bilden einer Schnittstelle zwischen Frontend und Datenbank darstellt. Mit Hilfe von Express.js bietet der Server verschiedene REST-Schnittstellen zum Abfragen und Verändern der Daten an. 

**Grundkonfiguration**
1. Verwendete Libraries
   - express (Webserver)
   - pg (Postgres DB Zugriff)
   - cors (Anfragen von Localhost erlauben)
   - multer (Multiform HTTP POST Anfragen ermöglichen)

2. Environment
  DB Parameter: 
   ``` Dockerfile
      PGUSER: "postgres"
      PGHOST: "db"
      PGPASSWORD: "example" 
      PGDATABASE: "dogs" 
      PGPORT: "5432" 
   ```
   Port für Hosting (Default = 8004): 
    Setzen der Variable:
   ``` Dockerfile
      PORT: 8003
   ```
    Verwenden der Variable:
   ```JavaScript
   const port = process.env.PORT || 8004;
   app.listen(port, () => console.log(`app listening on ${port}`));
   ```

**REST-Schnittstellen**

`GET /dogs`
- Liste aller gespeicherten Hunderassen

`GET /comments?dog={dog_id}`
- Liste aller Kommentare für Hunderasse mit der id {dog_id}

`POST /comments`
- Hinzufügen von Kommentar
- Erwartete Daten:
  - `comment`:  Kommentartext
  - `title`:    Titel
  - `dog`:      ID der Hunderasse
  - `author`:   Name des Autors


### 4. Frontend

Im Frontend kommt Nuxt.js als Meta Framework für Vue.js zum Einsatz. Die Konfiguration erfolgt im [Configfile](./web/nuxt.config.js).

**Verwendete Libraries**
- `Nuxt Router`: Navigation auf der Website
- `Vuex Store`: Zentrale clientseitige Datenhaltung
- `TailwindCSS`: CSS Framework ([Config](./web/tailwind.config.js))
- `Nuxt Image`: Optimierung von eingebundenen Grafiken, z.B. Komprimierung zu `.webp`

**Server**

Zum Hosten des Frontends wird ein Node 12 Alpine Image verwendet. Dabei handelt es sich um eine leichtgewichtige Linux Distribution. Die Konfiguration erfolgt im [Dockerfile](./web/Dockerfile) in folgenden Schritten: 
1. Working Directory erstellen
   ```Dockerfile
    RUN mkdir -p /usr/src/nuxt-app
    WORKDIR /usr/src/nuxt-app
   ```
2. apk updaten und git installieren
   ```Dockerfile
    RUN apk update && apk upgrade
    RUN apk add git
   ```
3. Anwendung in Image kopieren
   ```Dockerfile
    COPY . /usr/src/nuxt-app/
   ```
4. Anwendung bauen
   ```Dockerfile
    ENV SERVER_URL="http://localhost:8003"
    RUN npm install
    RUN npm run build
   ```
5. Port und Environment Variablen vorbereiten
   ```Dockerfile
    EXPOSE 3000
    ENV NUXT_HOST=0.0.0.0
    ENV NUXT_PORT=3000
   ```
6. Anwendung starten
   ```Dockerfile
    CMD [ "npm", "start" ]
   ```

### 5. Mögliche Anpassungen für "Produktionseinsatz"

- Einsatz von nginx
  - Hosting von Frontend (Umstellung zu SSG notwendig)
  - Reverse Proxy für Backend (und Frontend mit SSR)
  - TLS Terminierung für HTTPS
  - "Verstecken" von Datenbank und Adminer vor Öffentlichkeit im privaten Netzwerk

- Andere Anpassungen, beispielhaft
  - Sichere Passwörter verwenden
  - SEO (Tags, Performance, Metadaten)
  - Responsiveness => Für Mobile optimieren
