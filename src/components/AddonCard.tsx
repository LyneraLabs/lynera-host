import { Addon } from '@/config/addons'

interface AddonCardProps {
  addon: Addon
  selected: boolean
  disabled: boolean
  disabledReason?: string
  onToggle: (addonId: string) => void
}

export function AddonCard({ addon, selected, disabled, disabledReason, onToggle }: AddonCardProps) {
  return (
    <div
      className={`border rounded-lg p-4 transition-all ${
        selected
          ? 'border-primary bg-primary/5'
          : disabled
          ? 'border-gray-200 bg-gray-50 opacity-60'
          : 'border-gray-200 hover:border-primary'
      }`}
    >
      <div className="flex items-start gap-3">
        <input
          type="checkbox"
          checked={selected}
          disabled={disabled}
          onChange={() => onToggle(addon.id)}
          className="mt-1 w-5 h-5 text-primary focus:ring-primary rounded cursor-pointer disabled:cursor-not-allowed"
        />
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-secondary">{addon.name}</h4>
            <span className="text-sm font-semibold text-primary">
              +${addon.priceMonthly}/mo
            </span>
          </div>
          <p className="text-sm text-gray-600 mt-1">{addon.description}</p>
          {disabled && disabledReason && (
            <p className="text-xs text-red-600 mt-2 font-medium">
              {disabledReason}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
