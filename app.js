const app = Vue.createApp({
    data() {
        return {
            api_key: '0080145170b4b05ad7a133bb87e590b0',
            url_base: 'https://api.openweathermap.org/data/2.5/',
            query: '',
            weather: {}
        };
    },
    methods: {
        fetchWeather () {
            fetch(`${this.url_base}weather?q=${this.query}&units=metric&APPID=${this.api_key}`)
                .then(response => {
                    return response.json();
                }).then(this.setResults);
        },
        setResults (results) {
            this.weather = results;
        },
        dateBuilder () {
            let d = new Date();
            let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

            let day = days[d.getDay()];
            let date = d.getDate();
            let month = months[d.getMonth()];
            let year = d.getFullYear();

            return `${day}, ${month} ${date}, ${year}`;
        }
    }
});

app.mount('#weather-app');