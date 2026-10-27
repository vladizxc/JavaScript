class ThemeSwitcher {
    selectors = {
        switchThemeButton: "[data-js-theme-switcher]",
    }

    themes = {
        dark: "dark",
        light: "light",
    }

    stateClasses = {
        isDarkTheme: "is-dark-theme"
    }

    storageKey = "theme"

    constructor() {
        this.switchThemeButtonElement = document.querySelector(this.selectors.switchThemeButton)
        this.setInitialTheme()
        this.bindEvents()
    }

    get isDarkThemeCashed() {
        return localStorage.getItem(this.storageKey) === this.themes.dark
    }

    onClick = () => {
        localStorage.setItem(
            this.storageKey, 
            this.isDarkThemeCashed ? this.themes.light : this.themes.dark)
        
        document.documentElement.classList.toggle(
            this.stateClasses.isDarkTheme
        )
    }

    setInitialTheme() {
        document.documentElement.classList.toggle(
            this.stateClasses.isDarkTheme,
            this.isDarkThemeCashed
        )
    }

    bindEvents() {
        this.switchThemeButtonElement.addEventListener("click", this.onClick)
    }
}

new ThemeSwitcher()