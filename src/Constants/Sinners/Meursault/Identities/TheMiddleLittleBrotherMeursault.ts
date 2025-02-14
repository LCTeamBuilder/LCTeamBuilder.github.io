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
} from '../../../../Enums/Index';
import { Identity, Passive, Skill, SkillDescriptionPart } from '../../../../Models/Index';

const TheMiddleLittleBrotherMeursaultDefense: Skill = {
    Name: "Multifold Retribution",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 4+ Envy Reson., Coin Power +1"),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
            new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheMiddleLittleBrother/MultifoldRetribution.png'
}

const TheMiddleLittleBrotherMeursaultSkill1: Skill = {
    Name: "We Remember",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Clash Lose] Gain 1 [Envy DMG Up] next turn"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheMiddleLittleBrother/WeRemember.png'
}

const TheMiddleLittleBrotherMeursaultSkill2: Skill = {
    Name: "Chains of Loyalty",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +1,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Apply 1 [Envy Power Up] to 2 allies adjacent to this unit on the Dashboard<br>"+
            "Apply 1 [Envy DMG Up] as well when selecting Envy affinity Skills from the affected Skill Slots"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheMiddleLittleBrother/ChainsOfLoyalty.png'
}

const TheMiddleLittleBrotherMeursaultSkill3: Skill = {
    Name: "Recording",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("At 4+ Envy Reson., Coin Power +1<br>"+
            "At 6+ Envy A-Reson., Coin Power +1"),
        new SkillDescriptionPart("[On Hit] If target has [Vengeance Mark], inflict 1 [Plus Coin Drop] next turn", 1),
        new SkillDescriptionPart("[On Hit] If target has [Vengeance Mark], inflict 2 [Envy Fragility] next turn", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheMiddleLittleBrother/Recording.png'
}

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
    FullImageDir: './assets/Sinners/Meursault/Identities/TheMiddleLittleBrother/10507gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/TheMiddleLittleBrother/10507gacksunginfo.png'
}