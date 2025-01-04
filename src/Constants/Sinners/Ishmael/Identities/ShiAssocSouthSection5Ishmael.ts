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

const ShiAssocSouthSection5IshmaelDefense: Skill = {
    Name: "Counter",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 8,
    Coins: 1,
    CoinValue: +8,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise] Count, +50% Critical Damage"),
        new SkillDescriptionPart("[On Hit] Gain +1 [Poise] Count", 1)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ShiAssociationSouthSection5/Counter.png"
}

const ShiAssocSouthSection5IshmaelSkill1: Skill = {
    Name: "Flying Sword",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At less than 50% HP, this skill gives 3 additional [Poise]"),
        new SkillDescriptionPart("[On Hit] Gain 2 [Poise]", 1)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ShiAssociationSouthSection5/FlyingSword.png"
}

const ShiAssocSouthSection5IshmaelSkill2: Skill = {
    Name: "Flashing Strike",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] At less than 50% HP, use Coin 1 and 2 an additional time"),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 1),
        new SkillDescriptionPart("[On Hit] Gain +2 [Poise] Count", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ShiAssociationSouthSection5/FlashingStrike.png"
}

const ShiAssocSouthSection5IshmaelSkill3: Skill = {
    Name: "Catch Breath",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 6,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("At 5+ [Poise] Count, +50% Critical Damage"),
        new SkillDescriptionPart("[Heads Hit] Gain 2 [Poise]", 1),
        new SkillDescriptionPart("[On Crit] At less than 25% HP, heal 100% of damage dealt", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: "assets/Icons/Skills/Sinners/Ishmael/ShiAssociationSouthSection5/CatchBreath.png"
}

export const ShiAssocSouthSection5Ishmael: Identity = {
    Id: 10803,
    Name: "Shi Assoc. South Section 5",
    Sinner: SinnerEnum.Ishmael,
    Rarity: RarityEnum.TwoStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 2,
    SpeedMax: 5,
    StaggerHpPercentThresholds: [80, 60],
    DefenseLevel: +1,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [ShiAssocSouthSection5IshmaelSkill1, 
            ShiAssocSouthSection5IshmaelSkill2, 
            ShiAssocSouthSection5IshmaelSkill3, 
            ShiAssocSouthSection5IshmaelDefense],
    Passives: [
        new Passive("Walking the Line of Death",
            PassiveTypeEnum.Combat,
            "At less than 50% HP, gain 1 additional [Poise] from skills.",
            [{ sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Owned),

        new Passive("Strife",
            PassiveTypeEnum.Support,
            "1 ally with the least HP gains +2 counter skill final Power.",
            [{ sin: SinEnum.Envy, amount: 2 }],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: "./assets/Sinners/Ishmael/Identities/ShiAssociationSouthSection5/10803gacksung.png",
    PortraitImageDir: "./assets/Sinners/Ishmael/Identities/ShiAssociationSouthSection5/10803gacksunginfo.png"
}