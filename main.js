new Vue({
    el: '#app',
    data: {
        greeting: '↓↓↓↓↓',
        input1: '',
        input2: '',
        input3: '',
        input4: '',
        input5: '',
        input6: '',
        temp:0
    },
    methods: {
        changeGreeting() {
            this.temp++;

            var itemsArray = [
                this.input1,
                this.input2,
                this.input3,
                this.input4,
                this.input5,
                this.input6
            ]

            var num = Math.floor(Math.random() * itemsArray.length);

            if (this.temp == 5) {
                this.greeting = '💖';
                return
            }

            if (itemsArray[num] == '' || itemsArray[num] == this.greeting) {
                this.changeGreeting();
                return;
            }
            this.greeting = itemsArray[num];
        }
    }
})
