import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { TheMiddleLittleBrotherMeursaultSkill1 } from "./TheMiddleLittleBrotherMeursaultSkill1";
import { TheMiddleLittleBrotherMeursaultSkill2 } from "./TheMiddleLittleBrotherMeursaultSkill2";
import { TheMiddleLittleBrotherMeursaultSkill3 } from "./TheMiddleLittleBrotherMeursaultSkill3";
import { TheMiddleLittleBrotherMeursaultDefense } from "./TheMiddleLittleBrotherMeursaultDefense";

export class TheMiddleLittleBrotherMeursault implements Identity{
    readonly Id: number = 10507;
    readonly Name: string = "The Middle Little Brother";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [55, 20];
    readonly DefenseLevel: number = +3;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new TheMiddleLittleBrotherMeursaultSkill1, 
                                new TheMiddleLittleBrotherMeursaultSkill2, 
                                new TheMiddleLittleBrotherMeursaultSkill3, 
                                new TheMiddleLittleBrotherMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Loyalty",
            PassiveTypeEnum.Combat,
            "- Apply [Vengeance Mark] to the unit that dealt the most Skill damage to an ally.<br>"+
            "- If the main target has [Vengeance Mark], Final Power +1<br>"+
            "- If there is another surviving ally from the Middle other than this unit, this unit and the surviving ally from the Middle with the least SP both heal 6 SP at every Turn End",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("One family",
            PassiveTypeEnum.Support,
            "The 1 ally with the least SP heals 10 SP at Turn End if there is another ally from the same Faction",
            [{sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/TheMiddleLittleBrother/10507gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/TheMiddleLittleBrother/10507gacksunginfo.png";
}