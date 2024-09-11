import { useAppContext } from "@/context/AppContext";

type LanguageContent<T> = {
    EN: T;
    ES: T;
};

function renderByLanguage<T>(content: LanguageContent<T>): T {
    const { language } = useAppContext();
    return content[language as keyof LanguageContent<T>];
}

export default function RenderTextByLanguage(textEN: string, textES: string): string {
    return renderByLanguage({ EN: textEN, ES: textES });
}

export function RenderTextByLanguageHTML(textEN: JSX.Element, textES: JSX.Element): JSX.Element {
    return renderByLanguage({ EN: textEN, ES: textES });
}