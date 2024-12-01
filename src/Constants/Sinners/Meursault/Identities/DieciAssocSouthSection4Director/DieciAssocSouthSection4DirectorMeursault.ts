import {
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum
} from "../../../../../Enums/Index";
import { Identity, Passive } from "../../../../../Models/Index";
import { DieciAssocSouthSection4DirectorMeursaultDefense } from "./DieciAssocSouthSection4DirectorMeursaultDefense";
import { DieciAssocSouthSection4DirectorMeursaultSkill1 } from "./DieciAssocSouthSection4DirectorMeursaultSkill1";
import { DieciAssocSouthSection4DirectorMeursaultSkill2 } from "./DieciAssocSouthSection4DirectorMeursaultSkill2";
import { DieciAssocSouthSection4DirectorMeursaultSkill3 } from "./DieciAssocSouthSection4DirectorMeursaultSkill3";

export const DieciAssocSouthSection4DirectorMeursault: Identity = {
    Id: 10510,
    Name: "Dieci Assoc. South Section 4 Director",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DieciAssocSouthSection4DirectorMeursaultSkill1, 
            DieciAssocSouthSection4DirectorMeursaultSkill2, 
            DieciAssocSouthSection4DirectorMeursaultSkill3, 
            DieciAssocSouthSection4DirectorMeursaultDefense],
    Passives: [
        new Passive("Study Hall",
            PassiveTypeEnum.Combat,
            "Every time an other allies Discards a Skill, apply 1 [Erudition] to the ally and self (once per Skill, 3 times per turn)<br>"+
            "Turn End: Next turn, gain [Pierce DMG Up] and [Blunt DMG Up] equal to the number of other allies that Discarded Skills (max 3)",
            [{ sin: SinEnum.Gloom, amount: 2 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("Diligent Learning",
            PassiveTypeEnum.Support,
            "When 1 ally with the highest max HP Discards a Skill, gain (5 x Discarded Skill rank)% of the max HP as Shield (once per turn)<br>"+
            "If the unit has [Insight], multiply the above Shield value by 1.5",
            [{ sin: SinEnum.Gloom, amount: 5 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/DieciAssocSouthSection4Director/10510gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/DieciAssocSouthSection4Director/10510gacksunginfo.png"
}