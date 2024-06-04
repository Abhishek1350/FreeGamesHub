import { Logo } from "./icons";
export function MainLoader() {
    return (
        <div className="loader">
            <div className="intern animate-bounce">
                <Logo />
            </div>
            <div className="external-shadow">
                <div className="central"></div>
            </div>
        </div>
    );
}
