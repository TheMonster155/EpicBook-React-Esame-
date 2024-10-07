module.exports = {
    testEnvironment: 'jsdom', // Specifica l'ambiente di test jsdom per testare componenti React
    moduleNameMapper: {
        '\\.(css|less|scss)$': 'identity-obj-proxy', // Permette di gestire importazioni di file CSS durante i test
    },
    transform: {
        '^.+\\.jsx?$': 'babel-jest', // Trasforma i file JS/JSX usando babel-jest
        '^.+\\.tsx?$': 'ts-jest', // Trasforma i file TS/TSX usando ts-jest
    },
    testPathIgnorePatterns: ['/node_modules/', '/dist/'], // Ignora test nelle cartelle specificate
    setupFilesAfterEnv: ['<rootDir>/setupTests.js'], // Esegue il file di setup dopo l'ambiente di test
}
