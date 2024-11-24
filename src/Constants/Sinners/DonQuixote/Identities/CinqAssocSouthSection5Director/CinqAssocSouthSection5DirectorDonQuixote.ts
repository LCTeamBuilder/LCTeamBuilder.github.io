import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { CinqAssocSouthSection5DirectorDonQuixoteSkill1 } from "./CinqAssocSouthSection5DirectorDonQuixoteSkill1";
import { CinqAssocSouthSection5DirectorDonQuixoteSkill2 } from "./CinqAssocSouthSection5DirectorDonQuixoteSkill2";
import { CinqAssocSouthSection5DirectorDonQuixoteSkill3 } from "./CinqAssocSouthSection5DirectorDonQuixoteSkill3";
import { CinqAssocSouthSection5DirectorDonQuixoteDefense } from "./CinqAssocSouthSection5DirectorDonQuixoteDefense";

export class CinqAssocSouthSection5DirectorDonQuixote implements Identity{
    readonly Id: number = 10305;
    readonly Name: string = "Cinq Assoc. South Section 5 Director";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 72;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new CinqAssocSouthSection5DirectorDonQuixoteSkill1, 
                                new CinqAssocSouthSection5DirectorDonQuixoteSkill2, 
                                new CinqAssocSouthSection5DirectorDonQuixoteSkill3, 
                                new CinqAssocSouthSection5DirectorDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("A Noble Duel",
            PassiveTypeEnum.Combat,
            "If Speed of all allies is higher than Speed of all enemies, this unit deals more damage based on the Speed difference between it and the slowest enemy. (+6% per 1 point of difference, Max 30%)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Dueling Request",
            PassiveTypeEnum.Support,
            "If Speed of all allies is higher than Speed of all enemies, the fastest ally deals more damage based on the Speed difference between it and the slowest enemy. (+3% per 1 point of difference, Max 15%)",
            [{sin: SinEnum.Pride, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/CinqAssociationSouthSection5Director/10305gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/CinqAssociationSouthSection5Director/10305gacksunginfo.png";
}