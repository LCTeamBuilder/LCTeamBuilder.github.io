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

const TheThumbEastSoldatoIISinclairDefense: Skill = {
    Name: "Ferrous Guard",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Pride,
    BaseValue: 9,
    Coins: 1,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Inflict 2 [Tremor] against the Attacker when hit as long as this unit has remaining Shield (4 times per turn)")],
    DamageType: undefined,
    DefenseType: DefenseTypeEnum.Guard,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheThumbEastSoldatoII/1101304.png'
}

const TheThumbEastSoldatoIISinclairSkill1: Skill = {
    Name: "Adherence to Propriety.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Lust,
    BaseValue: 3,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +2,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Gain Coin Power for every 6 (sum of [Burn] and [Tremor] on target) (max 2)<br>" +
            "[On Use] If target has 'Unique Tremor' as [Tremor], Clash Power +1"),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheThumbEastSoldatoII/1101301.png'
}

const TheThumbEastSoldatoIISinclairSkill2: Skill = {
    Name: "Respect the Thumb.",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +6,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 6 (sum of [Burn] and [Tremor] on target) (max 2)<br>" +
            "[On Use] Deal +10% damage for every 4 (sum of [Burn] and [Tremor] on target) (max 30%)<br>" +
            "[On Use] If target has 10+ 'Unique Tremor', Base Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 2 [Tremor]<br>" +
            "[On Hit] Inflict +1 [Tremor] Count", 1),
        new SkillDescriptionPart("[On Hit] If target has 10+ [Tremor - Scorch], inflict +2 [Burn] Count<br>" +
            "[On Hit] If target has 6+ [Tremor], trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 2)],
    DamageType: DamageTypeEnum.Pierce,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheThumbEastSoldatoII/1101302.png'
}

const TheThumbEastSoldatoIISinclairSkill3: Skill = {
    Name: "Thruster Compression",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("[On Use] Coin Power +1 for every 8 (sum of [Burn] and [Tremor] on target) (max 2)<br>" +
            "[On Use] At 3+ [Scorch Propellant Ammo], Base Power +3, deal +30% damage, and convert the Coins to [Unbreakable Coin]s"),
        new SkillDescriptionPart("Spend 1 [Scorch Propellant Ammo]<br>" +
            "If this unit spent [Scorch Propellant Ammo] due to this Coin's effect, deal +25% damage<br>" +
            "[On Hit] Inflict +1 [Tremor] Count<br>" +
            "[On Hit] Inflict +3 [Burn] Count<br>" +
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Scorch]", 1),
        new SkillDescriptionPart("Spend 1 [Scorch Propellant Ammo]<br>" +
            "If this unit spent [Scorch Propellant Ammo] due to this Coin's effect, deal +25% damage<br>" +
            "[On Hit] Inflict +1 [Tremor] Count<br>" +
            "[On Hit] Inflict 3 [Burn]", 2),
        new SkillDescriptionPart("Spend 1 [Scorch Propellant Ammo]<br>" +
            "If this unit spent [Scorch Propellant Ammo] due to this Coin's effect, deal +25% damage<br>" +
            "[On Hit] Inflict +1 [Tremor] Count<br>" +
            "[On Hit] Inflict 4 [Burn]<br>" +
            "[On Hit] Trigger [Tremor Burst], then, reduce target's [Tremor] Count by 1<br>" +
            "[On Hit] If this unit spent [Scorch Propellant Ammo], trigger [Tremor Burst]; then, reduce the target's [Tremor] Count by 1<br>" +
            "[On Hit] If this unit spent 3 [Scorch Propellant Ammo] with this Skill, trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Sinclair/TheThumbEastSoldatoII/1101303.png'
}

export const TheThumbEastSoldatoIISinclair: Identity = {
    Id: 11013,
    Name: "The Thumb East Soldato II",
    Sinner: SinnerEnum.Sinclair,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 79,
    HealthPerLevel: 2.96,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [70, 40, 20],
    DefenseLevel: +0,
    SlashResist: 2,
    PierceResist: 0.5,
    BluntResist: 1,
    Skills: [TheThumbEastSoldatoIISinclairSkill1, 
            TheThumbEastSoldatoIISinclairSkill2, 
            TheThumbEastSoldatoIISinclairSkill3, 
            TheThumbEastSoldatoIISinclairDefense],
    Passives: [
        new Passive("Bayonets",
            PassiveTypeEnum.Combat,
            "Always Active: begin Encounters with 15 [Scorch Propellant Ammo]<br><br>" +

            "If this unit spent [Scorch Propellant Ammo] with Skills or Passives, gain [Damage Up] equal to the amount spent next turn (max 3)<br><br>" +

            "When flipping a Coin that consumes [Scorch Propellant Ammo]: while not having [Scorch Propellant Ammo] does not cancel this unit's attacks, the Coin's On Hit \"inflict [Burn]\" and \"inflict [Burn] Count\" effects do not activate"),

        new Passive("Ammunition Tribute",
            PassiveTypeEnum.Combat,
            "When the 1 ally Identity with the fastest Deployment order among those using [Ammo] finishes their attack, if their current [Ammo] count is fewer than half (rounded up), spend [Scorch Propellant Ammo] on self equal to the total [Ammo] count the affected unit spent, and supply them with the same amount of [Ammo] as [Scorch Propellant Ammo] this unit just spent. (can spend up to 5 ammunition) (once per Encounter)<br><br>" +

            "- If the [Ammo] receiving Identity is a Thumb Identity of a higher rank, supply 1 additional [Ammo] they use<br>" +
            "- If the [Ammo] receiving Identity has separate values for Potency and Count, they will be supplied at random.<br>" +
            "- If either Potency or Count is maxed out, supply whichever is not maxed.",
            [{ sin: SinEnum.Pride, amount: 3}],
            PassiveCostTypeEnum.Resonance),

        new Passive("Reloader",
            PassiveTypeEnum.Support,
            "When the 1 ally Identity with the fastest Deployment order among those using [Ammo] finishes their attack, if their current [Ammo] count is fewer than half (rounded up), regain half of the maximum [Ammo] capacity (rounded up; once per Encounter; max [Ammo] regained: 5)<br><br>" +

            "- If the [Ammo] receiving Identity has separate values for Potency and Count, they will gain them at random<br>" +
            "- If either Potency or Count of [Ammo] is maxed out, gain whichever is not maxed<br>" +
            "- This effect does not activate if there are no Identities that use [Ammo]",
            [{ sin: SinEnum.Pride, amount: 4}],
            PassiveCostTypeEnum.Resonance)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Sinclair/Identities/TheThumbEastSoldatoII/11013gacksung.png',
    PortraitImageDir: './assets/Sinners/Sinclair/Identities/TheThumbEastSoldatoII/11013gacksunginfo.png'
}