class FormsValidation {
    selectors = {
        form: '[data-js-form]',
        fieldErrors: '[data-js-form-field-errors]'
    }

    errorMessages = {
        valueMissing: () => 'Пожалуйста заполните это поле',
        patternMissing: ({ title }) => title || 'Данные не соответствуют формату',
        tooShort: ({ minLength }) => `Минимум символов: ${minLength}`,
        tooLong: ({ maxLength }) => `Слишком длинное значение: ${maxLength}`,
    }
    
    constructor() {
        this.bindEvents()
    }

    onSubmit(event) {
        const {target} = event
        const isFormElement = target.matches(this.selectors.form) 
        if(!isFormElement) {
            return
        }

        const requiredControlElements = [...target.elements]
            .filter(({required}) => required)

        let isFormValid = true
        let firstInvalidFieldControl = null

        requiredControlElements.forEach((element) => {
            const isFieldValid = this.validateField(element)
            if (!isFieldValid) {
                isFormValid = false

                if(!firstInvalidFieldControl) {
                    firstInvalidFieldControl = element
                }
            }
        })

        if (!isFormValid) {
            event.preventDefault()
            firstInvalidFieldControl.focus()
        }
    }

    onChange(event) {
        const {target} = event
        const isRequired = target.required
        const isToggleType = ['radio', 'checkbox'].includes(target.type)

        if (isToggleType && isRequired) {
            this.validateField(target)
        }
    }

    manageErrors(fieldControlElement, errorMessages) {
        const fieldErrorsElement = fieldControlElement.parentElement.querySelector(this.selectors.fieldErrors)
        fieldErrorsElement.innerHTML = errorMessages
            .map((message) => `<span class="field_error">${message}</span>`)
            .join("")
    }

    validateField(fieldControlElement) {
        const errors = fieldControlElement.validity
        const errorMessages = []

        Object.entries(this.errorMessages).forEach( ([errorType, getErrorMessage]) => {
            if (errors[errorType]) {
                errorMessages.push(getErrorMessage(fieldControlElement))
            }
        } )

        this.manageErrors(fieldControlElement, errorMessages)
        const isValid = errorMessages.length === 0
        fieldControlElement.ariaInvalid = !isValid
        return isValid
    }

    onBlur(event) {
        const {target} = event
        const isFormField = target.closest(this.selectors.form)
        const isRequired = target.required

        if(isFormField && isRequired) {
            this.validateField(target)
        }
    }

    bindEvents() {
        document.addEventListener("blur", (event) => {
            this.onBlur(event)
        }, {capture: true})
        document.addEventListener("change", (event) => this.onChange(event))
        document.addEventListener("submit", (event) => this.onSubmit(event))
    }
}

new FormsValidation()