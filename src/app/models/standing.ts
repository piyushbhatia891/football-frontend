export class Standing{
    country:Country;
    league:League;
    team:Team;
    standing:number;
}

export interface Country{
    country_id:string;
    country_name:string;

}

export interface Team{
    team_key:string;
    team_name:string;
}

export interface League{
    league_id:string;
    league_name:string;
}