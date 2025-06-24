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

const TheMiddleLittleBrotherSinclairDefense: Skill = {
    Name: "Warmup in the East",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[Combat Start] Skill behavior changes based on the sum of Envy A-Reson.:<br>" +
            "- At 4+ sum of A-Reson., use 'Payback with Interest' as Counter<br>" +
            "- At 6+ sum of A-Reson., use 'Write 'em all down' as Counter<br>" +
            "(Activates from the leftmost Skill Slot. Activates 2 times per turn)<br>" +
            "[Combat Start] Gain 30% of missing HP as Shield (once per turn)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: DefenseTypeEnum.Counter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheMiddleLittleBrother/WarmupInTheEast.png'
}

const TheMiddleLittleBrotherSinclairSkill1: Skill = {
    Name: "Is it You?!",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Gluttony,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Bleed], Coin Power +1<br>" +
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>" +
            "[On Use] Heal 5 SP on self<br>" +
            "- At max SP, gain Clash Power +1 instead"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Bleed]", 2)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheMiddleLittleBrother/IsItYou.png'
}

const TheMiddleLittleBrotherSinclairSkill2: Skill = {
    Name: "Payback with Interest",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Envy,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("If target has 6+ [Bleed], Coin Power +1<br>" +
            "[On Use] Gain +5 [Aggro] to this Skill Slot next turn<br>" +
            "[Combat Start] This Skill gains (highest Reson. / 2) Offense Level (max 3, rounded down)<br>" +
            "- If the said Reson. includes an A-Reson., double the Offense Level gained from the above effect"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Bleed]", 2),
        new SkillDescriptionPart("At 3+ Reson. that includes this Skill, deal +20% damage", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheMiddleLittleBrother/PaybackWithInterest.png'
}

const TheMiddleLittleBrotherSinclairSkill3: Skill = {
    Name: "Write 'em all down",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Envy,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Deal +1% damage for every 1 [Book of Vengeance (Sinclair)] (max 30%)<br>" +
            "Coin Power +1 for every 6 [Bleed] on target (max 2)<br>" +
            "[Combat Start] This Skill gains (highest Reson. / 2) Offense Level (max 3, rounded down)<br>" +
            "- If the said Reson. includes an A-Reson., double the Offense Level gained from the above effect"),
        new SkillDescriptionPart("[On Hit] Inflict 4 [Bleed]", 2),
        new SkillDescriptionPart("Deal +5% damage for every Reson. that includes this Skill (max 30%)<br>" +
            "Deal +15% damage for every 10 [Book of Vengeance (Sinclair)] (max 45%)", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheMiddleLittleBrother/WriteEmAllDown.png'
}

export const TheMiddleLittleBrotherSinclair: Identity = {
    Id: 11012,
    Name: "The Middle Little Brother",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 92,
    HealthPerLevel: 3.05,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [50, 20],
    DefenseLevel: +5,
    SlashResist: 1,
    PierceResist: 2,
    BluntResist: 0.5,
    Skills: [TheMiddleLittleBrotherSinclairSkill1, 
            TheMiddleLittleBrotherSinclairSkill2, 
            TheMiddleLittleBrotherSinclairSkill3, 
            TheMiddleLittleBrotherSinclairDefense],
    Passives: [
        new Passive("The Middle Never Forgets",
            PassiveTypeEnum.Combat,
            "When hit by an enemy, inflict 5 [Vendetta Mark] against the attacker(or Part) (once per turn)<br><br>" +

            "When an other ally is hit by an enemy, inflict 2 [Vendetta Mark] against the attacker(or Part) (once per turn per Identity)<br>" +
            "- If the said ally is from the Middle, inflict 3 additional [Vendetta Mark]<br><br>" +

            "After Attacking with Base Attack Skills or Counter Skills, consume all [Vendetta Mark] on the target<br>" +
            "- Every time the target consumes [Vendetta Mark], gain [Book of Vengeance (Sinclair)] equal to the amount consumed",
            [{ sin: SinEnum.Envy, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("We've Got Your Back",
            PassiveTypeEnum.Support,
            "Combat Start: 1 ally with the least current HP percentage gains 2 [Defense Level Up]<br>" +
            "- If the said ally is from the Middle, also gain 2 [Offense Level Up]",
            [{ sin: SinEnum.Envy, amount: 5}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/TheMiddleLittleBrother/11012gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/TheMiddleLittleBrother/11012gacksunginfo.png'
}