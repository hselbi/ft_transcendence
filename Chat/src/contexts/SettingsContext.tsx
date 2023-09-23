// provider === component
import { ChangeEvent, ReactNode, createContext, useEffect } from "react";
import { defaultSettings } from "../config";
import useLocalStorage from "../hooks/useLocalStorage";
import getColorPresets, {
    colorPresets,
} from "../utils/getColorPresets";


interface Settings {
    themeMode: string;
    themeDirection: string;
    themeContrast: string;
    themeLayout: string;
    themeColorPresets: string;
    themeStretch: boolean;
    onToggleMode: () => void;
    onChangeMode: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleDirection: () => void;
    onChangeDirection: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeDirectionByLang: (lang: string) => void;
    onToggleLayout: () => void;
    onChangeLayout: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onToggleContrast: () => void;
    onChangeContrast: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeColor: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setColor: {
        contrastText: string;
        lighter: string;
        light: string;
        main: string;
        dark: string;
        darker: string;
        name: string;
    };
    colorOption: { name: string; value: string }[];
    onToggleStretch: () => void;
    onResetSetting: () => void;
}

interface ColorSettings {
    contrastText: string;
    lighter: string;
    light: string;
    main: string;
    dark: string;
    darker: string;
    name: string;
}

const defaultPreset: ColorSettings = {
    contrastText: 'default-contrastText',
    lighter: 'default-lighter',
    light: 'default-light',
    main: 'default-main',
    dark: 'default-dark',
    darker: 'default-darker',
    name: 'default-name',
};
const initialState: Settings = {
    ...defaultSettings,

    // Mode
    onToggleMode: () => { },
    onChangeMode: () => { },

    // Direction
    onToggleDirection: () => { },
    onChangeDirection: () => { },
    onChangeDirectionByLang: () => { },

    // Layout
    onToggleLayout: () => { },
    onChangeLayout: () => { },

    // Contrast
    onToggleContrast: () => { },
    onChangeContrast: () => { },

    // Color
    onChangeColor: () => { },
    setColor: defaultPreset,
    colorOption: [],

    // Stretch
    onToggleStretch: () => { },

    // Reset
    onResetSetting: () => { },
};

interface SettingsProviderProps {
    children: ReactNode;
}


const SettingsContext = createContext<Settings>(initialState);

const SettingsProvider = ({ children }: SettingsProviderProps) => {
    const [settings, setSettings] = useLocalStorage("settings", {
        themeMode: initialState.themeMode,
        themeLayout: initialState.themeLayout,
        themeStretch: initialState.themeStretch,
        themeContrast: initialState.themeContrast,
        themeDirection: initialState.themeDirection,
        themeColorPresets: initialState.themeColorPresets,
    });

    const isArabic = localStorage.getItem("i18nextLng") === "ar";

    useEffect(() => {
        if (isArabic) {
            onChangeDirectionByLang("ar");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isArabic]);

    // Mode

    const onToggleMode = () => {
        setSettings({
            ...settings,
            themeMode: settings.themeMode === "light" ? "dark" : "light",
        });
    };

    const onChangeMode = (event: ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            themeMode: event.target.value,
        });
    };

    // Direction

    const onToggleDirection = () => {
        setSettings({
            ...settings,
            themeDirection: settings.themeDirection === "rtl" ? "ltr" : "rtl",
        });
    };

    const onChangeDirection = (event: ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            themeDirection: event.target.value,
        });
    };

    const onChangeDirectionByLang = (lang: any) => {
        setSettings({
            ...settings,
            themeDirection: lang === "ar" ? "rtl" : "ltr",
        });
    };

    // Layout

    const onToggleLayout = () => {
        setSettings({
            ...settings,
            themeLayout:
                settings.themeLayout === "vertical" ? "horizontal" : "vertical",
        });
    };

    const onChangeLayout = (event: ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            themeLayout: event.target.value,
        });
    };

    // Contrast

    const onToggleContrast = () => {
        setSettings({
            ...settings,
            themeContrast: settings.themeContrast === "default" ? "bold" : "default",
        });
    };

    const onChangeContrast = (event: ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            themeContrast: event.target.value,
        });
    };

    // Color

    const onChangeColor = (event: ChangeEvent<HTMLInputElement>) => {
        setSettings({
            ...settings,
            themeColorPresets: event.target.value,
        });
    };

    // Stretch

    const onToggleStretch = () => {
        setSettings({
            ...settings,
            themeStretch: !settings.themeStretch,
        });
    };

    // Reset

    const onResetSetting = () => {
        setSettings({
            themeMode: initialState.themeMode,
            themeLayout: initialState.themeLayout,
            themeStretch: initialState.themeStretch,
            themeContrast: initialState.themeContrast,
            themeDirection: initialState.themeDirection,
            themeColorPresets: initialState.themeColorPresets,
        });
    };

    return (
        <SettingsContext.Provider
            value={{
                ...settings, // Mode
                onToggleMode,
                onChangeMode,

                // Direction
                onToggleDirection,
                onChangeDirection,
                onChangeDirectionByLang,

                // Layout
                onToggleLayout,
                onChangeLayout,

                // Contrast
                onChangeContrast,
                onToggleContrast,

                // Stretch
                onToggleStretch,

                // Color
                onChangeColor,
                setColor: getColorPresets(settings.themeColorPresets),
                colorOption: colorPresets.map((color: {
                    contrastText: string;
                    lighter: string;
                    light: string;
                    main: string;
                    dark: string;
                    darker: string;
                    name: string;
                }) => ({
                    name: color.name,
                    value: color.main,
                })),

                // Reset
                onResetSetting,
            }}
        >
            {children}
        </SettingsContext.Provider>
    );
};

export { SettingsContext };

export default SettingsProvider;