import { useAppContext } from "@/context/AppContext";

export default function RenderTextByToLanguage(textEN: string, textES: string) {
    const { language } = useAppContext(); 

    if (language === "EN" ) {
        return textEN;
    } else if ( language === "ES") {
        return textES;
    }
}