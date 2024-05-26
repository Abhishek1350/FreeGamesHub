import { BlurIn } from "./animations";
export function MainLoader() {
    return (
        <div className="loader">
            <div className="intern">
                <BlurIn className="loading">
                    <h3 className="italic">
                        Almost There!
                    </h3>
                </BlurIn>
            </div>
            <div className="external-shadow">
                <div className="central"></div>
            </div>
        </div>
    );
}
