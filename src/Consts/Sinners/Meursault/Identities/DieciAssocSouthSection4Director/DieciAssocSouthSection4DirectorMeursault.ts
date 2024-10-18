import { FactionEnum, 
        KeywordEnum, 
        PassiveCostTypeEnum, 
        PassiveTypeEnum, 
        RarityEnum, 
        SinEnum, 
        SinnerEnum } from "../../../../../Enums/Index";
import { IdentityBase, Passive, Skill } from "../../../../../Models/Index";
import { DieciAssocSouthSection4DirectorMeursaultSkill1 } from "./DieciAssocSouthSection4DirectorMeursaultSkill1";
import { DieciAssocSouthSection4DirectorMeursaultSkill2 } from "./DieciAssocSouthSection4DirectorMeursaultSkill2";
import { DieciAssocSouthSection4DirectorMeursaultSkill3 } from "./DieciAssocSouthSection4DirectorMeursaultSkill3";
import { DieciAssocSouthSection4DirectorMeursaultDefense } from "./DieciAssocSouthSection4DirectorMeursaultDefense";

export class DieciAssocSouthSection4DirectorMeursault implements IdentityBase{
    readonly Id: number = 10510;
    readonly Name: string = "Dieci Assoc. South Section 4 Director";
    readonly Sinner: SinnerEnum = SinnerEnum.Meursault;
    readonly Rarity: RarityEnum = RarityEnum.ThreeStar;
    readonly BaseHealth: number = 82;
    readonly HealthPerLevel: number = 2.82;
    readonly SpeedMin: number = 4;
    readonly SpeedMax: number = 6;
    readonly StaggerHpPercentThresholds: number[] = [65, 35];
    readonly DefenseLevel: number = +2;
    readonly SlashResist: number = 1;
    readonly PierceResist: number = 0.5;
    readonly BluntResist: number = 2;
    readonly Skills: Skill[] = [new DieciAssocSouthSection4DirectorMeursaultSkill1, 
                                new DieciAssocSouthSection4DirectorMeursaultSkill2, 
                                new DieciAssocSouthSection4DirectorMeursaultSkill3, 
                                new DieciAssocSouthSection4DirectorMeursaultDefense];
    readonly Passives: Passive[] = [
        new Passive("Study Hall",
            PassiveTypeEnum.Combat,
            "Every time an other allies Discards a Skill, apply 1 [Erudition] to the ally and self (once per Skill, 3 times per turn)<br>"+
            "Turn End: Next turn, gain [Pierce DMG Up] and [Blunt DMG Up] equal to the number of other allies that Discarded Skills (max 3)",
            [{sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Diligent Learning",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest max HP Discards a Skill, gain (5 x Discarded Skill rank)% of the max HP as Shield (once per turn)<br>"+
            "If the unit has [Insight], multiply the above Shield value by 1.5",
            [{sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ];
    readonly Keywords: KeywordEnum[] = new Array<KeywordEnum>;
    readonly Factions: FactionEnum[] = new Array<FactionEnum>;
    readonly FullImageDir: string = "./assets/Sinners/Meursault/Identities/DieciAssocSouthSection4Director/10510gacksung.png";
    readonly PortraitImageDir: string = "./assets/Sinners/Meursault/Identities/DieciAssocSouthSection4Director/10510gacksunginfo.png";
}