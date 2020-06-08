class Validator{
    rooles = {
        "0": function(value){
            return  (value === '') ?' Не может быть пустым' : ''
        },
        "1" : function(value) {
            return  (!value.match(/([A-Z])/))
                    ? ' Хотя бы 1 заглавная буква ' :  ''
        },
        "2" : function(value) {
            return  (!value.match(/[1-9]/))
                    ? ' Хотя бы 1 цифра ' :  ''
        },
        "3" : function(value) {
            return  (value.length < 8)
                    ? ' Минимальная длина 8 символов ' :  ''
        }
        
    }
    types = {
        "general": [0],
        "password": [1, 2, 3]

    }
    hasError(array){
        let returnArr = array.filter(arr => (arr !== ''))
        return [] && returnArr
    }
    validate(type='general', value){
        const errorArr = this.types[type].map((t)=>(
            this.rooles[t](value)
        ))
        console.log(this.hasError(errorArr));
        return this.hasError(errorArr)
    }
}

export const validator = new Validator()