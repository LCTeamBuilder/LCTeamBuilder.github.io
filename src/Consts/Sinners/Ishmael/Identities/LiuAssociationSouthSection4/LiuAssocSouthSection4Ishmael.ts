import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LiuAssocSouthSection4IshmaelSkill1 } from "./LiuAssocSouthSection4IshmaelSkill1";
import { LiuAssocSouthSection4IshmaelSkill2 } from "./LiuAssocSouthSection4IshmaelSkill2";
import { LiuAssocSouthSection4IshmaelSkill3 } from "./LiuAssocSouthSection4IshmaelSkill3";
import { LiuAssocSouthSection4IshmaelDefense } from "./LiuAssocSouthSection4IshmaelDefense";

export class LiuAssocSouthSection4Ishmael implements IdentityBase{
    readonly Id: number = 10806;
    readonly Name: string = "Liu Assoc. South Section 4";
    readonly Sinner: SinnerEnum = SinnerEnum.Ishmael;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.73;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LiuAssocSouthSection4IshmaelSkill1, 
                                new LiuAssocSouthSection4IshmaelSkill2, 
                                new LiuAssocSouthSection4IshmaelSkill3, 
                                new LiuAssocSouthSection4IshmaelDefense];
    readonly Passives: Passive[] = [
        new Passive("Intense Blaze",
            PassiveTypeEnum.Combat,
            "Deal +10% Blunt damage for every 3 [Burn] Count on target. (Max 30%)",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Intense Blaze",
            PassiveTypeEnum.Support,
            "1 ally with the lowest Speed deals +5% Blunt damage for every 3 [Burn] Count on target. (Max 15%)",
            [{sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Ishmael/Identities/LiuAssociationSouthSection4/10806gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Ishmael/Identities/LiuAssociationSouthSection4/10806gacksunginfo.png";
}