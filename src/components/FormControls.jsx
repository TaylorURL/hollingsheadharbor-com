import { useId } from 'react';
import Icon from './Icon';

const CONTROL_BASE =
  'w-full rounded-xl border bg-white px-4 py-3 text-[15px] text-ink transition-colors duration-200 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-1';
const CONTROL_IDLE = 'border-navy-100 focus:border-navy-800 focus:ring-navy-800/30';
const CONTROL_INVALID = 'border-red-400 bg-red-50/40 focus:border-red-600 focus:ring-red-600/30';

function controlClasses(hasError) {
  return `${CONTROL_BASE} ${hasError ? CONTROL_INVALID : CONTROL_IDLE}`;
}

function FieldShell({ id, label, required, error, hint, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
      {children}
      {hint && !error && <p className="mt-1.5 text-xs text-gray-500">{hint}</p>}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
          <Icon name="close" className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

export function TextField({
  label,
  value,
  onChange,
  type = 'text',
  required,
  error,
  hint,
  ...rest
}) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? 'true' : undefined}
        className={controlClasses(Boolean(error))}
        {...rest}
      />
    </FieldShell>
  );
}

export function TextAreaField({ label, value, onChange, required, error, hint, rows = 4 }) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <textarea
        id={id}
        rows={rows}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? 'true' : undefined}
        className={`${controlClasses(Boolean(error))} resize-y`}
      />
    </FieldShell>
  );
}

export function SelectField({
  label,
  value,
  onChange,
  options,
  required,
  error,
  hint,
  placeholder = 'Select…',
}) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint}>
      <select
        id={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={error ? 'true' : undefined}
        className={controlClasses(Boolean(error))}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

/**
 * Segmented control used for every yes/no question. Rendering these as buttons
 * rather than a select keeps both answers visible, which matters on a form this
 * long — the applicant can see what they have and have not answered by scanning.
 */
export function ChoiceField({
  label,
  value,
  onChange,
  options = ['Yes', 'No'],
  required,
  error,
  hint,
}) {
  return (
    <fieldset>
      <legend className="mb-2 block text-sm font-semibold text-navy-900">
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
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
              className={`rounded-xl border px-5 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                isSelected
                  ? 'border-navy-800 bg-navy-800 text-white'
                  : `bg-white text-navy-800 hover:border-navy-300 hover:bg-navy-50 ${
                      error ? 'border-red-400' : 'border-navy-100'
                    }`
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>
      {hint && !error && <p className="mt-1.5 text-xs text-gray-500">{hint}</p>}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
          <Icon name="close" className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </fieldset>
  );
}

export function CheckboxField({ label, checked, onChange, required, error }) {
  const id = useId();
  return (
    <div>
      <label
        htmlFor={id}
        className={`flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-colors duration-200 ${
          checked
            ? 'border-navy-800 bg-navy-50'
            : `bg-white hover:bg-mist-50 ${error ? 'border-red-400' : 'border-navy-100'}`
        }`}
      >
        <input
          id={id}
          type="checkbox"
          checked={checked}
          onChange={(event) => onChange(event.target.checked)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded border-navy-200 text-navy-800 focus:ring-navy-800"
        />
        <span className="text-sm font-semibold text-navy-900">
          {label}
          {required && <span className="ml-1 text-red-600">*</span>}
        </span>
      </label>
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-red-600">
          <Icon name="close" className="h-3.5 w-3.5" />
          {error}
        </p>
      )}
    </div>
  );
}

export function FileField({ label, file, onChange, accept, hint, error }) {
  const id = useId();
  return (
    <FieldShell id={id} label={label} error={error} hint={hint}>
      <div className="flex flex-wrap items-center gap-3">
        <label
          htmlFor={id}
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-navy-100 bg-white px-5 py-3 text-sm font-semibold text-navy-800 transition-colors hover:border-navy-300 hover:bg-navy-50"
        >
          <Icon name="document" className="h-4 w-4" />
          Choose file
        </label>
        <input
          id={id}
          type="file"
          accept={accept}
          onChange={(event) => onChange(event.target.files?.[0] ?? null)}
          className="sr-only"
        />
        {file ? (
          <span className="flex items-center gap-2 text-sm text-gray-600">
            {file.name}
            <button
              type="button"
              onClick={() => onChange(null)}
              className="text-red-600 transition-colors hover:text-red-700"
              aria-label="Remove attached file"
            >
              <Icon name="close" className="h-4 w-4" />
            </button>
          </span>
        ) : (
          <span className="text-sm text-gray-500">No file chosen</span>
        )}
      </div>
    </FieldShell>
  );
}

export function FormSection({ title, description, children }) {
  return (
    <section className="rounded-lg border border-navy-100 bg-white p-6 shadow-card md:p-9">
      <h3 className="font-display text-2xl font-bold tracking-tight text-ink">{title}</h3>
      {description && <p className="mt-2 text-sm leading-relaxed text-gray-600">{description}</p>}
      <div className="mt-7 space-y-6">{children}</div>
    </section>
  );
}

export function FieldGrid({ children, columns = 2 }) {
  const layout = columns === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2';
  return <div className={`grid grid-cols-1 gap-5 ${layout}`}>{children}</div>;
}
