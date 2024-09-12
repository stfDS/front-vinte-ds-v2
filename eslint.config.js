import js from "@eslint/js"
import globals from "globals"
import react from "eslint-plugin-react"
import reactHooks from "eslint-plugin-react-hooks"
import reactRefresh from "eslint-plugin-react-refresh"

export default [
  { ignores: ["dist"] },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: { jsx: true },
        sourceType: "module"
      }
    },
    settings: { react: { version: "18.3" } },
    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs["jsx-runtime"].rules,
      ...reactHooks.configs.recommended.rules,

      // Règles existantes
      "react/jsx-no-target-blank": "off",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true }
      ],

      // Ajout des règles supplémentaires
      "react/react-in-jsx-scope": "off", // Désactive l'obligation d'importer React dans chaque fichier JSX
      quotes: ["warn", "double"], // Enforce l'utilisation de guillemets doubles dans le code
      "jsx-quotes": ["warn", "prefer-double"], // Enforce les guillemets doubles dans les attributs JSX
      "no-var": "error", // Interdit l'utilisation de var pour favoriser let/const
      eqeqeq: ["error", "always"], // Exige l'utilisation de === au lieu de ==
      "no-console": "warn", // Avertissement lors de l'utilisation de console.log
      "react/prop-types": "off", // Désactive la vérification des PropTypes dans les composants React
      "no-multiple-empty-lines": [
        "warn",
        {
          max: 1, // Limite à une seule ligne vide consécutive
          maxEOF: 0, // Pas de ligne vide à la fin du fichier
          maxBOF: 0 // Pas de ligne vide au début du fichier
        }
      ]
    }
  }
]
