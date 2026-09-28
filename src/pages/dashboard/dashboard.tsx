import { DashboardHeader } from "../../components/header"
import type { ThemeProps } from "../../types"
export function Dashboard({theme ,setTheme}:ThemeProps) {
    return (
        <>
        <DashboardHeader theme={theme} setTheme = {setTheme} />
        </>
    )
}