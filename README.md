# Countries App Setup

- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)

### Backend Setup

## Clone the Repository

```bash
git clone https://github.com/32andrii23/countries.git
cd backend
```

## Backend Setup

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the backend directory and add the following:

```env
PORT=3000
CLIENT_URL=http://localhost:5173
AVAILABLE_COUNTRIES_API_URL='https://date.nager.at/api/v3/AvailableCountries'
GET_CODE_BY_COUNTRY_NAME_API_URL='https://countriesnow.space/api/v0.1/countries/iso'
GET_COUNTRY_BORDERS_API_URL='https://date.nager.at/api/v3/CountryInfo'
GET_COUNTRY_POPULATION_STATS_API_URL='https://countriesnow.space/api/v0.1/countries/population'
GET_COUNTRY_FLAG_API_URL='https://countriesnow.space/api/v0.1/countries/flag/images'
```

### Start the Backend Server

```bash
npm run start:dev
```

The backend will be running at [http://localhost:3000](http://localhost:3000).

## Frontend Setup

Navigate to the frontend directory:

```bash
cd ../frontend
```

### Install Dependencies

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file in the frontend directory and add the following:

```env
API_URL=http://localhost:3000
```

### Start the Frontend Development Server

```bash
npm run dev
```

The frontend will be running at [http://localhost:5173](http://localhost:5173).
