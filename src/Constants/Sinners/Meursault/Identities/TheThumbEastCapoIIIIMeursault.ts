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

const TheThumbEastCapoIIIIMeursaultDefense: Skill = {
    Name: "I'm Burning Up.",
    SkillType: SkillTypeEnum.Defense,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 5,
    Coins: 2,
    CoinValue: +5,
    AttackWeight: 1,
    SkillLevel: +0,
    SkillDescription: 
        [new SkillDescriptionPart("[Clashable Counter]<br>" +
            "Final Power +1 for every 4 (sum of [Burn] and [Tremor] on the main target) (max 2)<br>" +
            "If [Tigermark Round] or [Savage Tigermark Round] is at 0, Clash Power +2"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor] (2 times per turn)", 1),
        new SkillDescriptionPart("[On Hit] Inflict +1 [Tremor] Count (2 times per turn)", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: DefenseTypeEnum.UniqueCounter,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheThumbEastCapoIIII/1051204.png'
}

const TheThumbEastCapoIIIIMeursaultSkill1: Skill = {
    Name: "Double Slash - Blast [爆]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill1,
    Affinity: SinEnum.Sloth,
    BaseValue: 4,
    Coins: 2,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +3,
    SkillDescription: 
        [new SkillDescriptionPart("Final Power +1 for every 4 (sum of [Burn] and [Tremor] on the main target) (max 3)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),
        new SkillDescriptionPart("Spend 1 [Tigermark Round]<br>" +
            "[On Hit] Inflict 2 [Tremor]<br>" +
            "[On Hit] Inflict 2 [Burn]", 2)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheThumbEastCapoIIII/1051201.png'
}

const TheThumbEastCapoIIIIMeursaultSkill2: Skill = {
    Name: "Triple Slash - Blast [爆]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill2,
    Affinity: SinEnum.Lust,
    BaseValue: 4,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +4,
    SkillDescription: 
        [new SkillDescriptionPart("Final Power +1 for every 4 (sum of [Burn] and [Tremor] on the main target) (max 4)"),
        new SkillDescriptionPart("[On Hit] Inflict 1 [Tremor]", 1),
        new SkillDescriptionPart("Spend 1 [Tigermark Round]<br>" +
            "[On Hit] Inflict 2 [Tremor]<br>" +
            "[On Hit] Inflict 2 [Burn]", 2),
        new SkillDescriptionPart("Spend 1 [Tigermark Round]<br>" +
            "[On Hit] Inflict +2 [Tremor] Count<br>" +
            "[On Hit] Inflict +2 [Burn] Count<br>" +
            "[On Hit] If target has 3+ [Tremor] Count, trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1", 3)],
    DamageType: DamageTypeEnum.Slash,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheThumbEastCapoIIII/1051202.png'
}

const TheThumbEastCapoIIIIMeursaultSkill31: Skill = {
    Name: "Tanglecleaver [快刀亂麻]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 5,
    Coins: 3,
    CoinValue: +4,
    AttackWeight: 1,
    SkillLevel: +5,
    SkillDescription: 
        [new SkillDescriptionPart("If this unit has [Savage Tigermark Round], activate 'Savage Tigerslayer's Perfected Flurry of Blades' instead<br>" +
            "- [Before Use] If this unit does not have [Savage Tigermark Round], cancel activation<br>" +
            "Coin Power +1 for every 8 (sum of [Burn] or [Tremor] on the main target), (max 2)"),
        new SkillDescriptionPart("Spend 1 [Tigermark Round]<br>" +
            "[On Hit] Inflict 3 [Tremor]<br>" +
            "[On Hit] Inflict 3 [Burn]", 1),
        new SkillDescriptionPart("Spend 1 [Tigermark Round]<br>" +
            "[On Hit] Inflict +3 [Tremor] Count<br>" +
            "[On Hit] Inflict +3 [Burn] Count", 2),
        new SkillDescriptionPart("Spend 1 [Tigermark Round]<br>" +
            "If this unit spent [Tigermark Round] due to this Coin's effect, deal +50% damage<br>" +
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Scorch]<br>" +
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>" +
            "- When spending [Tigermark Round], activate the above effect 2 more times", 3)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheThumbEastCapoIIII/1051203.png'
}

const TheThumbEastCapoIIIIMeursaultSkill32: Skill = {
    Name: "avage Tigerslayer's Perfected Flurry of Blades [超絕猛虎殺擊亂斬]",
    SkillType: SkillTypeEnum.Attack,
    SkillTier: SkillTierEnum.Skill3,
    Affinity: SinEnum.Wrath,
    BaseValue: 3,
    Coins: 5,
    CoinValue: +3,
    AttackWeight: 1,
    SkillLevel: +6,
    SkillDescription: 
        [new SkillDescriptionPart("Coin Power +1 for every 8 (sum of [Burn] and [Tremor] on the main target) (max 2)"),
        new SkillDescriptionPart("[On Hit] Inflict 3 [Tremor]", 1),
        new SkillDescriptionPart("[On Hit] Inflict +3 [Tremor] Count", 2),
        new SkillDescriptionPart("Spend 1 [Savage Tigermark Round]<br>" +
            "[On Hit] Inflict 3 [Burn]", 3),
        new SkillDescriptionPart("Spend 1 [Savage Tigermark Round]<br>" +
            "[On Hit] Inflict +3 [Burn] Count", 4),
        new SkillDescriptionPart("Spend 1 [Savage Tigermark Round]<br>" +
            "[On Hit] Trigger [Amplitude Conversion] into [Tremor - Scorch]<br>" +
            "[On Hit] Trigger [Tremor Burst]; then, reduce target's [Tremor] Count by 1<br>" +
            "- When spending [Savage Tigermark Round], activate the above effect 2 more times", 5)],
    DamageType: DamageTypeEnum.Blunt,
    DefenseType: undefined,
    SkillImageDir: 'assets/Icons/Skills/Sinners/Meursault/TheThumbEastCapoIIII/1051205.png'
}

export const TheThumbEastCapoIIIIMeursault: Identity = {
    Id: 10512,
    Name: "The Thumb East Capo IIII",
    Sinner: SinnerEnum.Meursault,
    Rarity: RarityEnum.ThreeStar,
    BaseHealth: 82,
    HealthPerLevel: 2.82,
    SpeedMin: 4,
    SpeedMax: 6,
    StaggerHpPercentThresholds: [65],
    DefenseLevel: +2,
    SlashResist: 1,
    PierceResist: 0.5,
    BluntResist: 2,
    Skills: [TheThumbEastCapoIIIIMeursaultSkill1, 
            TheThumbEastCapoIIIIMeursaultSkill2, 
            TheThumbEastCapoIIIIMeursaultSkill31,  
            TheThumbEastCapoIIIIMeursaultSkill32,
            TheThumbEastCapoIIIIMeursaultDefense],
    Passives: [
        new Passive("Chachihu [揷翅虎]",
            PassiveTypeEnum.Combat,
            "Always Active: begin Encounters with 12 [Tigermark Round]<br><br>" +

            "When flipping a Coin that consumes [Tigermark Round] or [Savage Tigermark Round]: while not having those 'Unique Ammo' does not cancel this unit's attacks, the Coin's On Hit \"inflict [Burn]\" and \"inflict [Burn] Count\" effects do not activate<br><br>" +

            "If this unit equipped Defense Skills for the first time in this Encounter, or if this unit spent all of his [Tigermark Round], or if this unit is Staggered: at the end of that turn, reload 8 [Savage Tigermark Round] and gain 1 [Unrelenting Spirit] (once per Encounter)<br>" +
            "- If this effect activates while this unit is Staggered, recover from Stagger (unless it's a forced Stagger)<br>" +
            "- Remove all [Tigermark Round] if this unit has any leftover [Tigermark Round]<br>" +
            "- At 8+ (sum of [Tigermark Round] and [Savage Tigermark Round] spent), convert [Unrelenting Spirit] to [Unrelenting Spirit - Shin]<br><br>" +
            
            "When this unit uses a Base Attack Skill that spends the final Round of [Savage Tigermark Round]…<br>" +
            "- Gain Atk Weight +2 before attacking<br>" +
            "- Gain 1 [Overheat] next turn"),

        new Passive("Tiantui Star's Blade [天退星刀]",
            PassiveTypeEnum.Combat,
            "When this unit has [Tigermark Round]:<br>" +
            "- At 1+ [Tigermark Round], convert all Coins of 'Tanglecleaver' into [Unbreakable Coin]s<br>" +
            "- Skill Coins that spend [Tigermark Round] gain +1 Power and deal +10% damage (activates only as long as the Coin has Rounds left to spend)<br><br>" +

            "When this unit has [Savage Tigermark Round]:<br>" +
            "- At 1+ [Savage Tigermark Round], convert all Coins of this unit's Base Attack Skills to [Unbreakable Coin]s<br>" +
            "- At 0 [Savage Tigermark Round], convert all Coins of this unit's Base Attack Skills that spend 'Unique Ammo' to [Unbreakable Coin]s<br>" +
            "- Skill Coins that spend [Tigermark Round] gain +2 Power, deal +30% damage, and inflict +2 more [Burn] Potency and [Burn] Count On Hit (activates only as long as the Coin has Rounds left to spend)",
            [{ sin: SinEnum.Sloth, amount: 3}],
            PassiveCostTypeEnum.Owned),

        new Passive("Savage Tiger's Lunge",
            PassiveTypeEnum.Support,
            "When 1 ally with the fastest Speed uses a Skill that spends [Ammo], if their Speed is faster than the target's by 3 or more, deal +(Speed difference x 3)% more damage (max 15%)<br>" +
            "(This effect does not activate if the unit lacks the [Ammo] buff entirely. However, it will activate if they have the [Ammo] buff, even at 0 rounds left.)",
            [{ sin: SinEnum.Sloth, amount: 3}],
            PassiveCostTypeEnum.Owned)
    ],
    Keywords: new Array<KeywordEnum>,
    Factions: new Array<FactionEnum>,
    FullImageDir: './assets/Sinners/Meursault/Identities/TheThumbEastCapoIIII/10512gacksung.png',
    PortraitImageDir: './assets/Sinners/Meursault/Identities/TheThumbEastCapoIIII/10512gacksunginfo.png'
}