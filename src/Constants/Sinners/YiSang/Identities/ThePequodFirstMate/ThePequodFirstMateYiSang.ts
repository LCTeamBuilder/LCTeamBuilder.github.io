import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { Identity, Passive, Skill } from "../../../../../Models/Index";
import { ThePequodFirstMateYiSangSkill1 } from "./ThePequodFirstMateYiSangSkill1";
import { ThePequodFirstMateYiSangSkill2 } from "./ThePequodFirstMateYiSangSkill2";
import { ThePequodFirstMateYiSangSkill3 } from "./ThePequodFirstMateYiSangSkill3";
import { ThePequodFirstMateYiSangDefense } from "./ThePequodFirstMateYiSangDefense";

export class ThePequodFirstMateYiSang implements Identity{
    readonly Id: number = 10107;
    readonly Name: string = "The Pequod First Mate";
    readonly Sinner: SinnerEnum = SinnerEnum.YiSang;
    readonly Rarity: RarityEnum = RarityEnum.TwoStar;
    readonly BaseHealth: number = 69;
    readonly HealthPerLevel: number = 2.39;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = -3;
    readonly SlashResist: number = 2;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 1;
    readonly Skills: Skill[] = [new ThePequodFirstMateYiSangSkill1, 
                                new ThePequodFirstMateYiSangSkill2, 
                                new ThePequodFirstMateYiSangSkill3, 
                                new ThePequodFirstMateYiSangDefense];
    readonly Passives: Passive[] = [
        new Passive("The First Mate's Harpoon",
            PassiveTypeEnum.Combat,
            "On Crit, inflict 2 more [Bleed] Potency with a Skill (6 times per turn)",
            [{sin: SinEnum.Pride , amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("The First Mate's Acumen",
            PassiveTypeEnum.Support,
            "On Crit, 1 ally with the most [Poise] inflicts 2 additional [Bleed] Potency with a Skill (6 times per turn)",
            [{sin: SinEnum.Pride, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/YiSang/Identities/ThePequodFirstMate/10107gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/YiSang/Identities/ThePequodFirstMate/10107gacksunginfo.png";
}