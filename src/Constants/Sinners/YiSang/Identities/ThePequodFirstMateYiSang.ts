import {
    DamageTypeEnum,
    DefenseTypeEnum,
    FactionEnum,
    KeywordEnum,
    PassiveCostTypeEnum,
    PassiveTypeEnum,
    RarityEnum,
    SinEnum,
    SinnerEnum,
    SkillTierEnum,
    SkillTypeEnum
} from "../../../../Enums/Index";
import { Identity, Passive, Skill, SkillDescriptionPart } from "../../../../Models/Index";

const ThePequodFirstMateYiSangDefense: Skill = {
    Name: "Evade",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 1,
    CoinValue: +10,
    AttackWeight: 1,
    SkillLevel: -3,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Evade,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/EvadeUT4.png"
}

const ThePequodFirstMateYiSangSkill1: Skill = {
    Name: "Impale",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bind] next turn<br>"+
            "[On Hit] Inflict 2 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/Impale.png"
}

const ThePequodFirstMateYiSangSkill2: Skill = {
    Name: "Relentless Stabbing",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count<br>"+
            "At 5+ [Poise], Clash Power +3"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]<br>"+
            "[On Crit] Reuse this Coin (3 times max)", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/RelentlessStabbing.png"
}

const ThePequodFirstMateYiSangSkill3: Skill = {
    Name: "Ambush",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: [
        new SkillDescriptionPart("[On Use] Gain 5 [Poise]<br>"+
            "At 7+ [Poise], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]<br>"+
            "[On Crit] Inflict +6 [Bleed] Count", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/YiSang/ThePequodFirstMate/Ambush.png"
}

export const ThePequodFirstMateYiSang: Identity = {
    Id: 10107,
    Name: "The Pequod First Mate",
    Sinner: SinnerEnum.YiSang,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 69,
    HealthPerLevel: 2.39,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35, 15],
    DefenseLevel: -3,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [ThePequodFirstMateYiSangSkill1, 
            ThePequodFirstMateYiSangSkill2, 
            ThePequodFirstMateYiSangSkill3, 
            ThePequodFirstMateYiSangDefense],
    Passives: [
        new Passive("The First Mate's Harpoon",
            PassiveTypeEnum.Combat,
            "On Crit, inflict 2 more [Bleed] Potency with a Skill (6 times per turn)",
            [{ sin: SinEnum.Pride , amount: 4}],
            PassiveCostTypeEnum.Owned),

        new Passive("The First Mate's Acumen",
            PassiveTypeEnum.Support,
            "On Crit, 1 ally with the most [Poise] inflicts 2 additional [Bleed] Potency with a Skill (6 times per turn)",
            [{ sin: SinEnum.Pride, amount: 4}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/YiSang/Identities/ThePequodFirstMate/10107gacksung.png",
    PortraitImageDir: "./assets/Sinners/YiSang/Identities/ThePequodFirstMate/10107gacksunginfo.png"
}