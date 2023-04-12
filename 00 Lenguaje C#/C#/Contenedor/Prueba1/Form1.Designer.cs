
namespace Prueba1
{
    partial class Form1
    {
        /// <summary>
        /// Variable del diseñador necesaria.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Limpiar los recursos que se estén usando.
        /// </summary>
        /// <param name="disposing">true si los recursos administrados se deben desechar; false en caso contrario.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Código generado por el Diseñador de Windows Forms

        /// <summary>
        /// Método necesario para admitir el Diseñador. No se puede modificar
        /// el contenido de este método con el editor de código.
        /// </summary>
        private void InitializeComponent()
        {
            this.num2 = new System.Windows.Forms.TextBox();
            this.num1 = new System.Windows.Forms.TextBox();
            this.resultado = new System.Windows.Forms.TextBox();
            this.btnSUMA = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // num2
            // 
            this.num2.Location = new System.Drawing.Point(35, 62);
            this.num2.Name = "num2";
            this.num2.Size = new System.Drawing.Size(100, 22);
            this.num2.TabIndex = 2;
            // 
            // num1
            // 
            this.num1.Location = new System.Drawing.Point(35, 23);
            this.num1.Name = "num1";
            this.num1.Size = new System.Drawing.Size(100, 22);
            this.num1.TabIndex = 3;
            // 
            // resultado
            // 
            this.resultado.Location = new System.Drawing.Point(35, 190);
            this.resultado.Name = "resultado";
            this.resultado.Size = new System.Drawing.Size(100, 22);
            this.resultado.TabIndex = 4;
            // 
            // btnSUMA
            // 
            this.btnSUMA.Location = new System.Drawing.Point(35, 106);
            this.btnSUMA.Name = "btnSUMA";
            this.btnSUMA.Size = new System.Drawing.Size(142, 65);
            this.btnSUMA.TabIndex = 5;
            this.btnSUMA.Text = "suma";
            this.btnSUMA.UseVisualStyleBackColor = true;
            this.btnSUMA.Click += new System.EventHandler(this.btnSUMA_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(250, 283);
            this.Controls.Add(this.btnSUMA);
            this.Controls.Add(this.resultado);
            this.Controls.Add(this.num1);
            this.Controls.Add(this.num2);
            this.Name = "Form1";
            this.Text = "Buscador";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion
        private System.Windows.Forms.TextBox num2;
        private System.Windows.Forms.TextBox num1;
        private System.Windows.Forms.TextBox resultado;
        private System.Windows.Forms.Button btnSUMA;
    }
}

