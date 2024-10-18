import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LCBSinnerDonQuixoteSkill1 } from "./LCBSinnerDonQuixoteSkill1";
import { LCBSinnerDonQuixoteSkill2 } from "./LCBSinnerDonQuixoteSkill2";
import { LCBSinnerDonQuixoteSkill3 } from "./LCBSinnerDonQuixoteSkill3";
import { LCBSinnerDonQuixoteDefense } from "./LCBSinnerDonQuixoteDefense";

export class LCBSinnerDonQuixote implements IdentityBase{
    readonly Id: number = 10301;
    readonly Name: string = "LCB Sinner";
    readonly Sinner: SinnerEnum = SinnerEnum.DonQuixote;
    readonly Rarity: RarityEnum = RarityEnum.OneStar;
    readonly BaseHealth: number = 66;
    readonly HealthPerLevel: number = 2.28;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [70, 40, 20];
    readonly DefenseLevel: number = -2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LCBSinnerDonQuixoteSkill1, 
                                new LCBSinnerDonQuixoteSkill2, 
                                new LCBSinnerDonQuixoteSkill3, 
                                new LCBSinnerDonQuixoteDefense];
    readonly Passives: Passive[] = [
        new Passive("Righteous Retribution",
            PassiveTypeEnum.Combat,
            "Skills deal +10% damage in a won clash.",
            [{sin: SinEnum.Lust , amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Support",
            PassiveTypeEnum.Support,
            "1 ally with the most SP deals +10% Pierce damage.",
            [{sin: SinEnum.Lust, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/DonQuixote/Identities/LCBSinner/10301normal.png";
    readonly PortraitImageDir: string = "./assets/Sinners/DonQuixote/Identities/LCBSinner/10301normalinfo.png";
}