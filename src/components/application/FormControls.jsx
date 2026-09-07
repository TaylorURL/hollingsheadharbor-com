import { useId } from 'react';
import Icon from '../ui/Icon';

const CONTROL_IDLE = 'focus:border-accent focus:ring-accent/30';
const CONTROL_INVALID =
  'border-danger bg-danger-surface/60 focus:border-danger focus:ring-danger/30';

function controlClasses(hasError, extra = '') {
  return `field-control ${hasError ? CONTROL_INVALID : CONTROL_IDLE} ${extra}`.trim();
}

/**
 * Every field gets its id from its `name`, so the error summary at the top of
 * the form can link straight to the control that needs fixing. A field with no
 * name falls back to a generated id, which is still unique but is not an
 * anchor anything can point at.
 */
function useFieldId(name) {
  const generated = useId();
  return name ? `field-${name}` : generated;
}

function describedBy(id, hint, error) {
  return [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean).join(' ');
}

function FieldHint({ id, children }) {
  return (
    <p id={id} className="mt-2 text-xs text-ink-muted">
      {children}
    </p>
  );
}

/**
 * The icon beside the message says the same thing the red does, for a reader
 * who cannot separate the two. The message is reached through the control's
 * aria-describedby rather than announced on its own: a failed submit puts
 * thirty of these on the page at once, and thirty alerts firing together is
 * noise. The summary at the top of the form is the one that speaks, and
 * `announce` is for a message that appears outside a submit, with no summary
 * to carry it.
 */
function FieldError({ id, announce, children }) {
  return (
    <p
      id={id}
      role={announce ? 'alert' : undefined}
      className="mt-2 flex items-center gap-2 text-xs font-medium text-danger-ink"
    >
      <Icon name="close" className="h-4 w-4 shrink-0" />
      {children}
    </p>
  );
}

function FieldShell({ id, label, required, error, hint, announceError, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-accent-strong">
        {label}
        {required && (
          <span className="ml-1 text-accent-contrast" aria-hidden="true">
            *
          </span>
        )}
      </label>
      {children}
      {hint && <FieldHint id={`${id}-hint`}>{hint}</FieldHint>}
      {error && (
        <FieldError id={`${id}-error`} announce={announceError}>
          {error}
        </FieldError>
      )}
    </div>
  );
}

export function TextField({
  name,
  label,
  value,
  onChange,
  type = 'text',
  required,
  error,
  hint,
  ...rest
}) {
  const id = useFieldId(name);
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? 'true' : undefined}
        aria-required={required ? 'true' : undefined}
        aria-describedby={describedBy(id, hint, error) || undefined}
        className={controlClasses(Boolean(error))}
        {...rest}
      />
    </FieldShell>
  );
}

export function TextAreaField({
  name,
  label,
  value,
  onChange,
  required,
  error,
  hint,
  rows = 4,
  ...rest
}) {
  const id = useFieldId(name);
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <textarea
        id={id}
        name={name}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? 'true' : undefined}
        aria-required={required ? 'true' : undefined}
        aria-describedby={describedBy(id, hint, error) || undefined}
        className={controlClasses(Boolean(error), 'resize-y')}
        {...rest}
      />
    </FieldShell>
  );
}

/**
 * The native select is kept, with its option list and its keyboard handling,
 * and only its chrome is replaced: appearance-none strips the platform arrow
 * so the field matches the inputs beside it, and the chevron is drawn back in
 * from the same icon set the rest of the page uses.
 */
export function SelectField({
  name,
  label,
  value,
  onChange,
  options,
  required,
  error,
  hint,
  placeholder = 'Select…',
  ...rest
}) {
  const id = useFieldId(name);
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          aria-invalid={error ? 'true' : undefined}
          aria-required={required ? 'true' : undefined}
          aria-describedby={describedBy(id, hint, error) || undefined}
          className={controlClasses(Boolean(error), 'cursor-pointer appearance-none pr-10')}
          {...rest}
        >
          <option value="">{placeholder}</option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        <Icon
          name="chevron-down"
          className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
        />
      </div>
    </FieldShell>
  );
}

/**
 * Segmented control used for every yes/no question. Rendering these as buttons
 * rather than a select keeps both answers visible, which matters on a form this
 * long — the applicant can see what they have and have not answered by scanning.
 */
export function ChoiceField({
  name,
  label,
  value,
  onChange,
  options = ['Yes', 'No'],
  required,
  error,
  hint,
}) {
  const id = useFieldId(name);
  return (
    <fieldset id={id} aria-describedby={describedBy(id, hint, error) || undefined}>
      <legend className="mb-2 block text-sm font-semibold text-accent-strong">
        {label}
        {required && (
          <span className="ml-1 text-accent-contrast" aria-hidden="true">
            *
          </span>
        )}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const isSelected = value === option;
          return (
            <button
              key={option}
              type="button"
              onClick={() => onChange(option)}
              aria-pressed={isSelected}
              className={`pressable min-h-control rounded-control border px-4 py-3 text-control font-semibold ${
                isSelected
                  ? 'border-accent bg-accent text-ink-on-accent hover:border-accent-strong hover:bg-accent-strong'
                  : `bg-surface-field text-accent hover:border-line-strong hover:bg-surface-accent ${
                      error ? 'border-danger' : 'border-line-field'
                    }`
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {hint && <FieldHint id={`${id}-hint`}>{hint}</FieldHint>}
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </fieldset>
  );
}

export function CheckboxField({ name, label, checked, onChange, required, error }) {
  const id = useFieldId(name);
  return (
    <div>
      <label
        htmlFor={id}
        className={`pressable flex items-start gap-3 rounded-control border p-3.5 ${
          checked
            ? 'border-accent bg-surface-accent'
            : `bg-surface-field hover:bg-surface-accent ${
                error ? 'border-danger' : 'border-line-field'
              }`
        }`}
      >
        <input
          id={id}
          name={name}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          aria-invalid={error ? 'true' : undefined}
          aria-required={required ? 'true' : undefined}
          aria-describedby={error ? `${id}-error` : undefined}
          className="mt-1 h-5 w-5 shrink-0 rounded-sm border-line-field"
        />
        <span className="text-sm font-semibold text-accent-strong">
          {label}
          {required && (
            <span className="ml-1 text-accent-contrast" aria-hidden="true">
              *
            </span>
          )}
        </span>
      </label>
      {error && <FieldError id={`${id}-error`}>{error}</FieldError>}
    </div>
  );
}

export function FileField({ name, label, file, onChange, accept, hint, error }) {
  const id = useFieldId(name);
  return (
    <FieldShell id={id} label={label} error={error} hint={hint} announceError>
      <div className="flex flex-wrap items-center gap-3">
        <label
          htmlFor={id}
          className="pressable inline-flex min-h-control items-center gap-2 rounded-control border border-line-field bg-surface-field px-4 py-3 text-control font-semibold text-accent hover:border-line-strong hover:bg-surface-accent"
        >
          <Icon name="document" className="h-4 w-4" />
          Choose File
        </label>
        <input
          id={id}
          name={name}
          type="file"
          accept={accept}
          onChange={(event) => onChange(event.target.files?.[0] ?? null)}
          aria-describedby={describedBy(id, hint, error) || undefined}
          className="sr-only"
        />
        {file ? (
          <span className="flex items-center gap-2 text-sm text-ink-muted">
            {file.name}
            <button
              type="button"
              onClick={() => onChange(null)}
              className="pressable text-accent-contrast hover:text-danger-ink"
              aria-label="Remove Attached File"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </span>
        ) : (
          <span className="text-sm text-ink-muted">No file chosen</span>
        )}
      </div>
    </FieldShell>
  );
}

export function FormSection({ title, description, children }) {
  return (
    <section className="panel p-6 md:p-8">
      <h3 className="font-display text-2xl font-bold text-ink">{title}</h3>
      {description && <p className="mt-2 text-prose text-ink-muted">{description}</p>}
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  );
}

export function FieldGrid({ children, columns = 2 }) {
  const layout = columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';
  return <div className={`grid grid-cols-1 gap-4 ${layout}`}>{children}</div>;
}
