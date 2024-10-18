import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { LiuAssocSouthSection4DirectorRodionSkill1 } from "./LiuAssocSouthSection4DirectorRodionSkill1";
import { LiuAssocSouthSection4DirectorRodionSkill2 } from "./LiuAssocSouthSection4DirectorRodionSkill2";
import { LiuAssocSouthSection4DirectorRodionSkill3 } from "./LiuAssocSouthSection4DirectorRodionSkill3";
import { LiuAssocSouthSection4DirectorRodionDefense } from "./LiuAssocSouthSection4DirectorRodionDefense";

export class LiuAssocSouthSection4DirectorRodion implements IdentityBase{
    readonly Id: number = 10908;
    readonly Name: string = "Liu Assoc. South Section 4 Director";
    readonly Sinner: SinnerEnum = SinnerEnum.Rodion;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 79;
    readonly HealthPerLevel: number = 2.74;
    readonly SpeedMin: number = 3;
    readonly SpeedMax: number = 7;
    readonly StaggerHpPercentThresholds: number[] = [65, 35, 15];
    readonly DefenseLevel: number = 0;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new LiuAssocSouthSection4DirectorRodionSkill1, 
                                new LiuAssocSouthSection4DirectorRodionSkill2, 
                                new LiuAssocSouthSection4DirectorRodionSkill3, 
                                new LiuAssocSouthSection4DirectorRodionDefense];
    readonly Passives: Passive[] = [
        new Passive("Burning Passion",
            PassiveTypeEnum.Combat,
            "Deal +10% more damage for every 6 [Burn] Potency on target (Max 30%)<br>"+
            "Combat Start: If all enemies have 6+ [Burn] Potency, apply 1 [Wrath DMG Up] to (Highest Wrath A-Reson.) allies in Deployment order<br>"+
            "- In Focused Encounters, the above activates when all enemy Parts have 6+ [Burn] Potency<br>"+
            "- If the ally is a Liu Association Fixer, apply 1 [Attack Power Up]",
            [{sin: SinEnum.Wrath, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Passionate Cheer",
            PassiveTypeEnum.Support,
            "1 ally with the least SP deals +5% Pierce damage for every 6 [Burn] Potency on target On Hit (Max 15%)",
            [{sin: SinEnum.Wrath, amount: 6 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Rodion/Identities/LiuAssociationSouthSection4Director/10908gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Rodion/Identities/LiuAssociationSouthSection4Director/10908gacksunginfo.png";
}