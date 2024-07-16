import './Header.scss'
import { SearchBar } from '../SearchBar/SearchBar'
import { Team } from '@/types'
import getTeams from '@/app/util/getTeams';

export const Header = async() => {

    let teamsData: Team[] = await getTeams();
    return (
        <header className='header' id='header'>
            <div className="header-container">
    <div className="logo-section">
        <a href={"/"} className="logo-link">
            <img
                src="/logo.png"
                alt="logo"
                className="logo-image"
            />
        </a>
    </div>
    <div className="search-section">
        <SearchBar teamsData={teamsData} />
    </div>
    <div className="empty-section"></div>
</div>

        </header>
    )
}