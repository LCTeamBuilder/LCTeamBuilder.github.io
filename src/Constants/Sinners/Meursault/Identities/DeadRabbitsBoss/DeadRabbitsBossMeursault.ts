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
import { DeadRabbitsBossMeursaultDefense } from "./DeadRabbitsBossMeursaultDefense";
import { DeadRabbitsBossMeursaultSkill1 } from "./DeadRabbitsBossMeursaultSkill1";
import { DeadRabbitsBossMeursaultSkill2 } from "./DeadRabbitsBossMeursaultSkill2";
import { DeadRabbitsBossMeursaultSkill3 } from "./DeadRabbitsBossMeursaultSkill3";

export const DeadRabbitsBossMeursault: Identity = {
    Id: 10509,
    Name: "Dead Rabbits Boss",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [DeadRabbitsBossMeursaultSkill1, 
            DeadRabbitsBossMeursaultSkill2, 
            DeadRabbitsBossMeursaultSkill3, 
            DeadRabbitsBossMeursaultDefense],
    Passives: [
        new Passive("Buy Time",
            PassiveTypeEnum.Combat,
            "Clash Power +1 against targets with [Rupture]<br>"+
            "Clash Power +2 if target has 5+ [Rupture] Count",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance),

        new Passive("My Responsibility",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed hits an enemy with 3+ [Rupture], inflict 1 [Offense Level Down] (3 times per enemy per turn)",
            [{ sin: SinEnum.Gluttony, amount: 3 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Meursault/Identities/DeadRabbitsBoss/10509gacksung.png",
    PortraitImageDir: "./assets/Sinners/Meursault/Identities/DeadRabbitsBoss/10509gacksunginfo.png"
}