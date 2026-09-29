import { Header } from "../../components/header"
import type { ThemeProps } from "../../types"

export function Dashboard({theme ,setTheme}:ThemeProps) {
    return (
        <>
        <Header theme={theme} setTheme = {setTheme} />
        </>
    )
}
