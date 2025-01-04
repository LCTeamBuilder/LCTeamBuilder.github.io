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

const LccbAssistantManagerRyoshuDefense: Skill = {
    Name: "Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/GuardUT4.png"
}

const LccbAssistantManagerRyoshuSkill1: Skill = {
    Name: "Shove",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 1,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain +2 [Poise] Count<br>"+
            "At 7+ Poise, Coin Power +1"),
        new SkillDescriptionPart("[On Crit] Target loses 8 SP", 1)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/Shove.png"
}

const LccbAssistantManagerRyoshuSkill2: Skill = {
    Name: "T.N.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Gluttony,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 7+ [Poise], Coin Power +1"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Crit] Inflict 2 [Offense Level Down]", 1),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]<br>"+
            "[On Crit] Inflict 1 [Offense Level Down]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/TN.png"
}

const LccbAssistantManagerRyoshuSkill3: Skill = {
    Name: "O.O.F",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Pride,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain 4 [Poise]<br>"+
            "Gain +1 Coin Power for every 7 [Poise] on self (Max 2)"),
        new SkillDescriptionPart("[On Crit] Gain +1 [Poise] Count", 1),
        new SkillDescriptionPart("[On Crit] Gain +1 [Poise] Count", 2),
        new SkillDescriptionPart("Spend 1 [Ammo]<br>"+
            "[On Crit] Double the application of [Tremor] and [Rupture] Potency and Count<br>"+
            "[On Hit] Inflict 4 [Tremor] and +2 [Tremor] Count<br>"+
            "[On Hit] Inflict 4 [Rupture] and +2 [Rupture] Count<br>"+
            "[On Hit] Trigger [Tremor Burst]", 3)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ryoshu/LCCBAssistantManager/OOF.png"
}

export const LccbAssistantManagerRyoshu: Identity = {
    Id: 10406,
    Name: "LCCB Assistant Manager",
    Sinner: SinnerEnum.Ryoshu,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 76,
    HealthPerLevel: 2.6,
    SpeedMin: 4,
    SpeedMax: 7,
    StaggerHpPercentThresholds: [65, 35],
    DefenseLevel: 0,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [LccbAssistantManagerRyoshuSkill1, 
            LccbAssistantManagerRyoshuSkill2, 
            LccbAssistantManagerRyoshuSkill3, 
            LccbAssistantManagerRyoshuDefense],
    Passives: [
        new Passive("A S.B.",
            PassiveTypeEnum.Combat,
            "- Always Active: Begin encounters with 7 [Ammo]<br>"+
            "- If this unit has 7+ [Poise] at Turn End, heal 8 SP.<br>"+
            "- If this unit already has max SP upon meeting the above condition, gain 1 [Poise] next turn",
            [{ sin: SinEnum.Gluttony, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("The Lucky Cig",
            PassiveTypeEnum.Support,
            "- If 1 ally with the least [Ammo] uses a Skill that spends [Ammo], gain 3 [Poise]. (once per turn, does not apply to allies without Ammo)<br>"+
            "- If 1 ally with the least [Ammo] uses up their last [Ammo] with a Coin, after the Coin's attack ends, deal 50% of the damage dealt by that Coin against each target as bonus damage against each individual target. (rounded up)",
            [{ sin: SinEnum.Pride, amount: 4 }],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ryoshu/Identities/LCCBAssistantManager/10406gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ryoshu/Identities/LCCBAssistantManager/10406gacksunginfo.png"
}