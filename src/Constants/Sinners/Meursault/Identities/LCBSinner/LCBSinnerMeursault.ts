import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerMeursaultSkill1 } from "./LCBSinnerMeursaultSkill1";
import { LCBSinnerMeursaultSkill2 } from "./LCBSinnerMeursaultSkill2";
import { LCBSinnerMeursaultSkill3 } from "./LCBSinnerMeursaultSkill3";
import { LCBSinnerMeursaultDefense } from "./LCBSinnerMeursaultDefense";

export class LCBSinnerMeursault implements Identity{
    readonly Id: number = 10501;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 90;
    readonly HealthPerLevel: number = 3.1;
    readonly SpeedMin: number = 2;
    readonly SpeedMax: number = 3;
    readonly StaggerHpPercentThresholds: number[] = [50, 20];
    readonly DefenseLevel: number = +3;;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 2;
    readonly BluntResist: number = 0.5;
    readonly Skills: Skill[] = [new LCBSinnerMeursaultSkill1, 
                                new LCBSinnerMeursaultSkill2, 
                                new LCBSinnerMeursaultSkill3, 
                                new LCBSinnerMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Staunchness",
            PassiveTypeEnum.Combat,
            "At less than 50% HP, gain 1 [Protection] at the start of the combat phase.",
            [{sin: SinEnum.Sloth , amount: 2}],
            PassiveCostTypeEnum.Owned),

        new Passive("Backup",
            PassiveTypeEnum.Support,
            "1 ally with the highest Max HP takes -10% damage from attack skills.",
            [{sin: SinEnum.Sloth, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/LCBSinner/10501normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/LCBSinner/10501normalinfo.png";
}