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
import { TheMiddleLittleBrotherMeursaultDefense } from "./TheMiddleLittleBrotherMeursaultDefense";
import { TheMiddleLittleBrotherMeursaultSkill1 } from "./TheMiddleLittleBrotherMeursaultSkill1";
import { TheMiddleLittleBrotherMeursaultSkill2 } from "./TheMiddleLittleBrotherMeursaultSkill2";
import { TheMiddleLittleBrotherMeursaultSkill3 } from "./TheMiddleLittleBrotherMeursaultSkill3";

export const TheMiddleLittleBrotherMeursault: Identity = {
    Id: 10507,
    Name: "The Middle Little Brother",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [55, 20],
    DefenseLevel: +3,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheMiddleLittleBrotherMeursaultSkill1, 
            TheMiddleLittleBrotherMeursaultSkill2, 
            TheMiddleLittleBrotherMeursaultSkill3, 
            TheMiddleLittleBrotherMeursaultDefense],
    Passives: [
        new Passive("Loyalty",
            PassiveTypeEnum.Combat,
            "- Apply [Vengeance Mark] to the unit that dealt the most Skill damage to an ally.<br>"+
            "- If the main target has [Vengeance Mark], Final Power +1<br>"+
            "- If there is another surviving ally from the Middle other than this unit, this unit and the surviving ally from the Middle with the least SP both heal 6 SP at every Turn End",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned),

        new Passive("One family",
            PassiveTypeEnum.Support,
            "The 1 ally with the least SP heals 10 SP at Turn End if there is another ally from the same Faction",
            [{ sin: SinEnum.Envy, amount: 3 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/TheMiddleLittleBrother/10507gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/TheMiddleLittleBrother/10507gacksunginfo.png"
}